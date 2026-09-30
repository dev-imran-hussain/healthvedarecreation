import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | The Health Veda Organics Story & Founder Mission',
  description:
    'In a world of synthetics, we make room for naturals. Discover the founding story, Indore roots, and 100% plant-based ethos behind Health Veda Organics founded by Mr. Abhishek Sharma.',
  openGraph: {
    title: 'About Us | The Health Veda Organics Story & Founder Mission',
    description:
      'In a world of synthetics, we make room for naturals. Discover the founding story and 100% plant-based ethos behind Health Veda Organics.',
    images: ['/health-veda-organics-vegan-products-be-vegan.assets/abhishek_sharma_founder.png'],
  },
};

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* ABOUT HERO SECTION */}
      <section className="about-hero-section" id="hero">
        <div className="bg-atmosphere" aria-hidden="true">
          <div className="light-orb"></div>
          <div className="clouds-group">
            <div className="cloud cloud-a"></div>
            <div className="cloud cloud-b"></div>
          </div>
          <div className="landscape-hills">
            <div className="hill hill-distant"></div>
            <div className="hill hill-mid"></div>
            <div className="hill hill-foreground"></div>
          </div>
        </div>

        <div className="section-container about-hero-container">
          <div className="about-hero-content">
            <span className="sub-label copper-label">THE FOUNDING PHILOSOPHY</span>
            <h1 className="about-hero-headline">
              In a World of Synthetics,<br />
              <em>We Make Room for Naturals.</em>
            </h1>
            <p className="about-hero-subtext">
              Born in Indore, India, Health Veda Organics began with an uncompromising mission: to challenge an industry obsessed with petroleum-derived synthetics, animal gelatins, and chemical binders, by creating 100% plant-based bio-nutrition that honors your cellular intelligence.
            </p>
            <div className="about-hero-actions">
              <a href="#manifesto" className="btn btn-primary-light">Read Our Manifesto ↓</a>
              <Link href="/#products" className="btn btn-outline-light">Browse Pure Formulations</Link>
            </div>
          </div>

          {/* Floating Editorial Badges */}
          <div className="about-hero-cards" aria-hidden="true">
            <div className="floating-card about-card-origin">
              <div className="card-meta">
                <span>Origin</span>
                <span className="card-arrow">↗</span>
              </div>
              <h4 className="card-title">Indore, India</h4>
              <p className="card-desc">Rooted in ancient Malwa herbal heritage &amp; certified clean pharmaceutical manufacturing.</p>
            </div>

            <div className="floating-card about-card-motto">
              <div className="card-meta">
                <span>The Motto</span>
                <span className="card-arrow">↗</span>
              </div>
              <h4 className="card-title">Vegan, Not Synthetic</h4>
              <p className="card-desc">Zero bovine gelatin shells. Pure whole-food botanical co-factors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE FOUNDING MANIFESTO & STORY */}
      <section className="manifesto-section" id="manifesto">
        <div className="section-container">
          <div className="manifesto-grid">
            <div className="manifesto-lead-col">
              <span className="sub-label">WHY WE EXIST</span>
              <h2 className="section-headline">Health Care Should Always Be Rooted in Nature.</h2>
              <blockquote className="manifesto-quote">
                &ldquo;Everyone being a part of nature requires genuine nourishment. When supplements become industrial chemical cocktails, they work against the very biology they claim to heal.&rdquo;
              </blockquote>
            </div>

            <div className="manifesto-body-col">
              <p className="body-para">
                When we surveyed the wellness landscape in India in 2021, we noticed an alarming contradiction. Shelves were flooded with &ldquo;health products&rdquo; packed with synthetic fillers, synthetic petroleum-derived dyes, chalk binders, and capsules made from slaughterhouse bovine gelatin.
              </p>
              <p className="body-para">
                We believed Indians deserved better: true nutrition rooted in Ayurveda&apos;s profound botanical knowledge, extracted via clean modern science, and made <strong>strictly 100% vegan, cruelty-free, and organic</strong>.
              </p>
              <p className="body-para">
                Today, from our headquarters in Indore, Madhya Pradesh, we formulate for over <strong>500,000+ conscious consumers</strong> across 1,800+ Indian cities—restoring trust in daily dietary rituals.
              </p>

              <div className="manifesto-stat-bar">
                <div className="stat-pill">
                  <strong>Indore</strong>
                  <span>Birthplace &amp; HQ</span>
                </div>
                <div className="stat-pill">
                  <strong>2022</strong>
                  <span>Year Founded</span>
                </div>
                <div className="stat-pill">
                  <strong>500k+</strong>
                  <span>Lives Nourished</span>
                </div>
                <div className="stat-pill">
                  <strong>0%</strong>
                  <span>Animal By-Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FOUNDER'S VISION & LEADERSHIP */}
      <section className="founder-spotlight-section" id="founder">
        <div className="section-container">
          <div className="founder-card-frame">
            <div className="founder-visual-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/health-veda-organics-vegan-products-be-vegan.assets/abhishek_sharma_founder.png"
                alt="Mr. Abhishek Sharma, Founder of Health Veda Organics"
                className="founder-portrait-img"
                loading="lazy"
              />
              <div className="founder-quote-overlay">
                <p className="founder-quote-text">&ldquo;Our mission is to make natural wellness simple, trustworthy and accessible for everyone.&rdquo;</p>
                <span className="founder-signature">— Mr. Abhishek Sharma, <em>Founder</em></span>
              </div>
            </div>

            <div className="founder-content-col">
              <span className="sub-label copper-label">LEADERSHIP &amp; VISION</span>
              <h2 className="section-headline founder-headline">Meet the Visionary Behind the Movement</h2>
              <h3 className="founder-title">Mr. Abhishek Sharma</h3>
              <span className="founder-role-tag">Founder &amp; Managing Director</span>

              <div className="founder-prose">
                <p className="body-para">
                  Health Veda Organics was founded by <strong>Mr. Abhishek Sharma</strong>, a visionary entrepreneur dedicated to transforming how people perceive and practice daily wellness. Driven by an abiding passion for natural living and holistic nourishment, he recognized the urgent need for a brand that bridges the unadulterated purity of nature with the clinical precision of modern nutritional science.
                </p>
                <p className="body-para">
                  Under his stewardship, Health Veda Organics has emerged as one of India&apos;s most respected names in plant-based health. By deliberately rejecting cheap slaughterhouse bovine gelatins, petroleum binders, and toxic fillers, Mr. Sharma created a strict standard of clean-label integrity across every formulation.
                </p>
                <p className="body-para">
                  With a relentless focus on innovation, transparency, and sustainable botanical sourcing, his mission is to make high-efficacy, 100% plant-based supplements universally accessible. His commitment to authenticity and customer well-being continues to propel the brand&apos;s rapid growth—inspiring a healthier, happier India rooted in natural wellness.
                </p>
              </div>

              <div className="founder-values-list">
                <div className="founder-val-item">
                  <span className="val-check">✓</span>
                  <div>
                    <strong>100% Plant-Based Purity:</strong>
                    <span>Zero hidden animal by-products or gelatin capsules.</span>
                  </div>
                </div>
                <div className="founder-val-item">
                  <span className="val-check">✓</span>
                  <div>
                    <strong>Nature’s Wisdom + Scientific Precision:</strong>
                    <span>Ayurvedic botanical power paired with bioactive cellular absorption.</span>
                  </div>
                </div>
                <div className="founder-val-item">
                  <span className="val-check">✓</span>
                  <div>
                    <strong>Radical Transparency:</strong>
                    <span>Third-party lab tested, honest labeling, and zero harmful chemicals.</span>
                  </div>
                </div>
              </div>

              <div className="founder-action-row">
                <Link href="/#products" className="btn btn-nav-discover" style={{ background: 'var(--green-dark)' }}>
                  Explore Formulations ↗
                </Link>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                  Connect on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE FOUR NON-NEGOTIABLE PILLARS */}
      <section className="pillars-section">
        <div className="section-container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <span className="sub-label">OUR CODE OF ETHICS</span>
            <h2 className="section-headline">The 4 Pillars of Health Veda Purity</h2>
            <p className="section-subtext">These four commitments govern every seed we sow, every berry we press, and every formula we bottle.</p>
          </div>

          <div className="four-pillars-grid">
            <div className="pillar-card">
              <div className="pillar-badge-num">01</div>
              <h3>100% Plant-Based &amp; Cruelty-Free</h3>
              <p>We refuse to use animal gelatin capsules, bone-meal calcium, or marine fish oils. Every active ingredient and softgel casing is derived from sustainably farmed botanicals and algae.</p>
              <span className="pillar-tag">Zero Animal By-Products</span>
            </div>

            <div className="pillar-card">
              <div className="pillar-badge-num">02</div>
              <h3>Vegan, Not Synthetic</h3>
              <p>Our vitamins and antioxidants are accompanied by their natural plant co-enzymes and bioflavonoids, allowing your digestive enzymes to recognize and absorb them effortlessly.</p>
              <span className="pillar-tag">Active Bioavailability</span>
            </div>

            <div className="pillar-card">
              <div className="pillar-badge-num">03</div>
              <h3>Zero Harmful Chemicals &amp; Fillers</h3>
              <p>No silicon dioxide, titanium dioxide, talc powder, magnesium stearate, artificial flavorings, or heavy metals. We formulate only with what actively nourishes your body.</p>
              <span className="pillar-tag">100% Clean Label</span>
            </div>

            <div className="pillar-card">
              <div className="pillar-badge-num">04</div>
              <h3>Triple-Screened Lab Rigor</h3>
              <p>Every single harvest undergoes stringent microbiological, heavy metal, and potency testing at independent NABL-accredited laboratories before receiving the Health Veda seal.</p>
              <span className="pillar-tag">NABL &amp; FSSAI Audited</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE VEDA MILESTONE TIMELINE */}
      <section className="timeline-section">
        <div className="section-container">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <span className="sub-label copper-label">OUR JOURNEY</span>
            <h2 className="section-headline light-headline">The March Towards a Healthier India</h2>
            <p className="section-subtext" style={{ color: 'var(--text-light-muted)' }}>From a small botanical laboratory in Indore to India&apos;s fastest-growing plant-based wellness movement.</p>
          </div>

          <div className="editorial-timeline">
            <div className="timeline-node">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h4>The Spark in Indore</h4>
                <p>Health Veda Organics is founded with a manifesto to introduce 100% vegan, non-synthetic chelated mineral formulations across India.</p>
              </div>
            </div>

            <div className="timeline-node">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h4>India Organic &amp; FSSAI Certification</h4>
                <p>Awarded national organic accreditations. Formulations reach over 100,000 households and gain trust among medical practitioners.</p>
              </div>
            </div>

            <div className="timeline-node">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>High-Altitude Sourcing Expeditions</h4>
                <p>Launched authentic Grade-A Himalayan Shilajit Resin (18,000 ft) and wild-crafted cold-pressed Sea Buckthorn Omega formulations.</p>
              </div>
            </div>

            <div className="timeline-node">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h4>Healthcare Professional Network</h4>
                <p>Recommended by over 1,200+ certified nutritionists and functional wellness doctors. Seamless national retail partnerships on Nykaa, Tata 1mg, and Amazon.</p>
              </div>
            </div>

            <div className="timeline-node">
              <div className="timeline-year">2026</div>
              <div className="timeline-content">
                <h4>500,000+ Strong Community &amp; Beyond</h4>
                <p>Continuing our pledge toward circular botanical harvesting, bio-degradable packaging, and transformative preventive health solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CERTIFIED PURITY STANDARDS */}
      <section className="certifications-section">
        <div className="section-container">
          <div className="text-center cert-header">
            <span className="sub-label">GOLD STANDARD ASSURANCE</span>
            <h2 className="section-headline">Verified by National &amp; International Bodies</h2>
            <p className="section-subtext">We believe trust is earned through transparent, verifiable third-party testing.</p>
          </div>

          <div className="certifications-grid">
            <div className="cert-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/health-veda-organics-vegan-products-be-vegan.assets/100__Plant-Based_Vegan.png" alt="100% Plant Based & Vegan Certification" className="cert-img" loading="lazy" />
              <h4>100% Plant-Based</h4>
              <p>Completely free from animal gelatins, dairy allergens, and animal testing.</p>
            </div>

            <div className="cert-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/health-veda-organics-vegan-products-be-vegan.assets/FSSAI_Safety_Certified.png" alt="FSSAI Safety Certified" className="cert-img" loading="lazy" />
              <h4>FSSAI Certified</h4>
              <p>Fully compliant with the highest Indian national food and supplement safety laws.</p>
            </div>

            <div className="cert-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/health-veda-organics-vegan-products-be-vegan.assets/India_Organics_Certified.png" alt="India Organic Certification" className="cert-img" loading="lazy" />
              <h4>India Organic</h4>
              <p>Grown without chemical pesticides, GMOs, or artificial agricultural fertilizers.</p>
            </div>

            <div className="cert-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/health-veda-organics-vegan-products-be-vegan.assets/No_Harmful_Chemicals_Fillers.png" alt="Zero Harmful Chemicals or Fillers" className="cert-img" loading="lazy" />
              <h4>Zero Harmful Fillers</h4>
              <p>No silicon dioxide, titanium dioxide, talc, or hidden magnesium stearate.</p>
            </div>

            <div className="cert-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/health-veda-organics-vegan-products-be-vegan.assets/Trusted_by_Nutrition_Experts.png" alt="Trusted by Nutrition Experts" className="cert-img" loading="lazy" />
              <h4>Nutritionist Approved</h4>
              <p>Recommended by 1,200+ functional nutritionists and medical experts nationwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: SOURCING INTEGRITY SHOWCASE */}
      <section className="about-sourcing-section">
        <div className="section-container">
          <div className="sourcing-layout-grid">
            <div className="sourcing-img-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/health-veda-organics-vegan-products-be-vegan.assets/Slide_2_0be91c00-4560-486e-9d67-55d41bba9ec8-1.jpg" alt="Botanical Sourcing and Natural Extraction" className="sourcing-featured-img" loading="lazy" />
            </div>
            <div className="sourcing-text-col">
              <span className="sub-label copper-label">FROM SOIL TO SUPPLEMENT</span>
              <h2 className="section-headline">Harvested at Peak Potency</h2>
              <p className="body-para">
                Our botanicals are ethically wild-harvested or organically cultivated in regions where the soil micro-biome is rich and unpolluted:
              </p>
              <ul className="sourcing-checklist">
                <li><strong>Ladakh Himalayas:</strong> Wild Sea Buckthorn superfruits grown in sub-zero ultraviolet intensity.</li>
                <li><strong>High Altitude Ranges (18,000 ft):</strong> Pure Gold Grade Shilajit resin containing ancient decomposed plant matter and fulvic acid.</li>
                <li><strong>Certified Organic Indian Farms:</strong> Ashwagandha, Shatavari, Amla, and Moringa harvested strictly in season.</li>
                <li><strong>Non-GMO European Cultures:</strong> Clean bio-fermented Menaquinone K2-7 and botanical Lichen D3.</li>
              </ul>
              <div style={{ marginTop: '2rem' }}>
                <Link href="/#products" className="btn btn-nav-discover" style={{ background: 'var(--green-dark)' }}>
                  Explore Formulations ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CALL TO ACTION */}
      <section className="final-cta-section">
        <div className="section-container">
          <div className="cta-banner-card">
            <div className="cta-content-column">
              <span className="sub-label copper-label">START YOUR BOTANICAL RITUAL</span>
              <h2 className="cta-heading">Experience the Purity of Health Veda Organics.</h2>
              <p className="cta-description">Join 500,000+ conscious Indians who have said goodbye to synthetics and chosen 100% plant-based daily wellness.</p>
              
              <div className="cta-buttons-group">
                <Link href="/#products" className="btn btn-primary-light">Explore Our Formulations</Link>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">Chat with an Ayurvedic Expert</a>
              </div>

              <div className="cta-guarantees">
                <span>🛡️ 30-Day Happiness Guarantee</span>
                <span>🚚 Free Express Shipping Above ₹499</span>
                <span>🌿 100% Certified Vegan</span>
              </div>
            </div>

            <div className="cta-visual-column">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/health-veda-organics-vegan-products-be-vegan.assets/Slide_2_0be91c00-4560-486e-9d67-55d41bba9ec8.jpg" alt="Health Veda Organics Natural Care" className="cta-hero-banner" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

