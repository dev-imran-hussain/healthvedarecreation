import { NextRequest } from 'next/server';
import { authorizeAdmin } from '@/middleware/admin';
import { connectDB } from '@/lib/db';
import { Order } from '@/models/Order';
import { User } from '@/models/User';
import { Product } from '@/models/Product';
import { apiSuccess, apiError } from '@/utils/response';

export async function GET(req: NextRequest) {
  try {
    await authorizeAdmin(req);
    await connectDB();

    const [
      totalOrders,
      totalCustomers,
      activeProducts,
      pendingOrders,
      lowStockProducts,
      revenueResult,
    ] = await Promise.all([
      Order.countDocuments(),
      User.countDocuments({ role: 'customer' }),
      Product.countDocuments({ isActive: true }),
      Order.countDocuments({ orderStatus: { $in: ['PENDING_PAYMENT', 'PROCESSING'] } }),
      Product.find({ stock: { $lte: 10 }, isActive: true }).select('name stock sku price'),
      Order.aggregate([
        { $match: { paymentStatus: 'PAID' } },
        { $group: { _id: null, totalRevenue: { $sum: '$total' } } },
      ]),
    ]);

    const totalRevenue = revenueResult[0]?.totalRevenue || 0;

    return apiSuccess({
      totalOrders,
      totalCustomers,
      activeProducts,
      pendingOrders,
      totalRevenuePaise: totalRevenue,
      totalRevenueRupees: Math.round(totalRevenue / 100),
      lowStockProducts,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unauthorized';
    return apiError('ADMIN_FORBIDDEN', message, 403);
  }
}
