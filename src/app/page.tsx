import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: EDITORIAL HERO */}
      <section className="hero-section" id="hero">
        {/* Atmospheric Environment */}
        <div className="bg-atmosphere" aria-hidden="true">
          <div className="light-orb"></div>
          <div className="clouds-group">
            <div className="cloud cloud-a"></div>
            <div className="cloud cloud-b"></div>
            <div className="cloud cloud-c"></div>
          </div>
          <div className="landscape-hills">
            <div className="hill hill-distant"></div>
            <div className="hill hill-mid"></div>
            <div className="hill hill-foreground"></div>
          </div>
        </div>

        {/* Asymmetrical Editorial Headlines */}
        <div className="editorial-headline" aria-hidden="true">
          <span className="headline-primary">DAILY HEALTH</span>
          <span className="headline-secondary">Simple</span>
        </div>

        {/* Floating 3D Capsules Layer */}
        <div className="capsules-layer" aria-hidden="true">
          <div className="capsule cap-1">
            <div className="cap-half white"></div>
            <div className="cap-half gold"></div>
          </div>
          <div className="capsule cap-2">
            <div className="cap-half sage"></div>
            <div className="cap-half white"></div>
          </div>
          <div className="capsule cap-3">
            <div className="cap-half copper"></div>
            <div className="cap-half white"></div>
          </div>
        </div>

        {/* Center Product Hero Composition */}
        <div className="hero-product-anchor">
          <div className="product-glow"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/health-veda-organics-vegan-products-be-vegan.assets/Front_1c373568-bbdb-43e5-a7ff-c152b921b98b.jpg"
            alt="Health Veda Organics Premium Formulation"
            className="hero-bottle-img"
          />
          <div className="grass-grounding"></div>
        </div>

        {/* Floating Editorial Annotation Cards */}
        <div className="floating-cards-layer">
          {/* Card 1: Latest Blend */}
          <div className="floating-card card-blend">
            <div className="card-meta">
              <span>Latest Blend</span>
              <span className="card-arrow">↗</span>
            </div>
            <h3 className="card-title">Core Nutrients Your Body Needs, Every Single Day.</h3>
            <p className="card-desc">Bio-fermented Sea Buckthorn with pure cold-extracted Omega 3, 6, 7 &amp; 9.</p>
            <Link href="#products" className="card-link-action">View Formulation</Link>
          </div>

          {/* Card 2: Clinically Backed */}
          <div className="floating-card card-science">
            <div className="card-meta">
              <span>Clinically Backed</span>
              <span className="card-arrow">↗</span>
            </div>
            <h3 className="card-title">High Bioavailability</h3>
            <p className="card-desc">Formulated with gentle chelated minerals for superior daily cellular absorption.</p>
          </div>

          {/* Card 3: Pure Ingredients / Story */}
          <div className="floating-card card-about" style={{ cursor: 'pointer' }}>
            <div className="card-media-preview">
              <span className="play-indicator">▶</span>
              <span className="preview-badge">100% Vegan</span>
            </div>
            <h3 className="card-title">Pure Certified Organics</h3>
            <p className="card-desc">Learn how we make clean wellness honest, potent, and effortless.</p>
            <Link href="/about" className="card-link-action">Read Our Story ↗</Link>
          </div>
        </div>

        {/* Bottom Benefit Statement */}
        <div className="bottom-benefit-statement">
          <span className="benefit-accent-line"></span>
          <p>Smart supplements made with authentic natural ingredients to sustain and nourish your everyday vitality.</p>
        </div>
      </section>

      {/* SECTION 2: BRAND ESSENCE & CREDIBILITY STATS */}
      <section className="brand-essence-section">
        <div className="section-container">
          <div className="essence-header text-center">
            <span className="sub-label">HONEST NUTRITION</span>
            <h2 className="section-headline">Nature’s Wisdom, Scientifically Elevated.</h2>
            <p className="section-subtext">
              We believe true wellness shouldn’t come with synthetic additives, chemical binders, or compromises. Every bottle of Health Veda Organics is clean, potent, and ethical from root to remedy.
            </p>
          </div>

          <div className="metrics-grid">
            <div className="metric-card">
              <span className="metric-number">100%</span>
              <span className="metric-label">Plant-Based &amp; Vegan</span>
              <p className="metric-detail">Strictly cruelty-free without any bovine gelatin, talc, or hidden animal by-products.</p>
            </div>
            <div className="metric-card">
              <span className="metric-number">500k+</span>
              <span className="metric-label">Active Community</span>
              <p className="metric-detail">Trusted across India by families, fitness professionals, and holistic practitioners.</p>
            </div>
            <div className="metric-card">
              <span className="metric-number">0%</span>
              <span className="metric-label">Artificial Additives</span>
              <p className="metric-detail">Free from synthetic preservatives, artificial sweeteners, toxic fillers, or gluten.</p>
            </div>
            <div className="metric-card">
              <span className="metric-number">3x</span>
              <span className="metric-label">Third-Party Lab Tested</span>
              <p className="metric-detail">Every batch undergoes rigorous screening for microbiological safety and heavy metals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SHOP BY HEALTH GOAL */}
      <section className="category-goals-section" id="categories">
        <div className="section-container">
          <div className="section-top-flex">
            <div>
              <span className="sub-label">TARGETED WELLNESS</span>
              <h2 className="section-headline">Shop by Health Goal</h2>
            </div>
            <p className="section-top-desc">Explore purposeful nutrition crafted to support specific areas of your physical, hormonal, and cognitive health.</p>
          </div>

          <div className="category-carousel-wrapper">
            <div className="categories-grid">
              <article className="category-card" data-category="bones">
                <div className="cat-image-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/health-veda-organics-vegan-products-be-vegan.assets/1._Shop_by_category_Bones_Health.jpg" alt="Bone and Joint Health Supplements" loading="lazy" />
                  <span className="cat-tag">Mobility</span>
                </div>
                <div className="cat-content">
                  <h3>Bone &amp; Joint Health</h3>
                  <p>Calcium, Magnesium, Zinc &amp; D3 for density, posture, and ligament support.</p>
                  <span className="cat-action">Explore Range ↗</span>
                </div>
              </article>

              <article className="category-card" data-category="immune">
                <div className="cat-image-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/health-veda-organics-vegan-products-be-vegan.assets/2._Shop_by_category_Immune_Health.jpg" alt="Immune Defense Supplements" loading="lazy" />
                  <span className="cat-tag">Defense</span>
                </div>
                <div className="cat-content">
                  <h3>Immune Defense</h3>
                  <p>Ayurvedic rasayanas, Sea Buckthorn, and botanical vitamin shields.</p>
                  <span className="cat-action">Explore Range ↗</span>
                </div>
              </article>

              <article className="category-card" data-category="gut">
                <div className="cat-image-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/health-veda-organics-vegan-products-be-vegan.assets/3._Shop_by_category_Gut_Health_1.jpg" alt="Gut Health and Enzymes" loading="lazy" />
                  <span className="cat-tag">Biome</span>
                </div>
                <div className="cat-content">
                  <h3>Gut &amp; Digestion</h3>
                  <p>Multi-strain probiotics &amp; digestive enzymes for effortless assimilation.</p>
                  <span className="cat-action">Explore Range ↗</span>
                </div>
              </article>

              <article className="category-card" data-category="hair">
                <div className="cat-image-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/health-veda-organics-vegan-products-be-vegan.assets/4._Shop_by_category_Hair_Health.jpg" alt="Hair Health & DHT Blocker" loading="lazy" />
                  <span className="cat-tag">Vitality</span>
                </div>
                <div className="cat-content">
                  <h3>Hair &amp; Follicle Strength</h3>
                  <p>Biotin, plant keratin, and botanical extracts to support thick strands.</p>
                  <span className="cat-action">Explore Range ↗</span>
                </div>
              </article>

              <article className="category-card" data-category="skin">
                <div className="cat-image-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/health-veda-organics-vegan-products-be-vegan.assets/5._Shop_by_category_Skin_Health.jpg" alt="Skin Radiance Supplements" loading="lazy" />
                  <span className="cat-tag">Radiance</span>
                </div>
                <div className="cat-content">
                  <h3>Skin Glow &amp; Radiance</h3>
                  <p>Glutathione builder &amp; Vitamin C for cellular collagen and skin clarity.</p>
                  <span className="cat-action">Explore Range ↗</span>
                </div>
              </article>

              <article className="category-card" data-category="brain">
                <div className="cat-image-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/health-veda-organics-vegan-products-be-vegan.assets/6._Shop_by_category_Brain_Health.jpg" alt="Cognitive and Brain Health" loading="lazy" />
                  <span className="cat-tag">Clarity</span>
                </div>
                <div className="cat-content">
                  <h3>Brain &amp; Mental Focus</h3>
                  <p>Ashwagandha, Brahmi, and adaptogens to balance cortisol and boost focus.</p>
                  <span className="cat-action">Explore Range ↗</span>
                </div>
              </article>

              <article className="category-card" data-category="gym">
                <div className="cat-image-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/health-veda-organics-vegan-products-be-vegan.assets/7._Shop_by_category_GYM_Essentials.jpg" alt="Gym Essentials & Recovery" loading="lazy" />
                  <span className="cat-tag">Stamina</span>
                </div>
                <div className="cat-content">
                  <h3>Gym &amp; Athletic Recovery</h3>
                  <p>Pure Himalayan Shilajit and endurance minerals for active performance.</p>
                  <span className="cat-action">Explore Range ↗</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CURATED FORMULATIONS / PRODUCT CATALOG */}
      <section className="featured-products-section" id="products">
        <div className="section-container">
          <div className="section-top-flex">
            <div>
              <span className="sub-label">SIGNATURE FORMULATIONS</span>
              <h2 className="section-headline">Clinically Crafted for Daily Rituals</h2>
            </div>

            <div className="filter-controls">
              <button className="filter-btn active" data-filter="all">All Blends</button>
              <button className="filter-btn" data-filter="stamina">Stamina &amp; Vitality</button>
              <button className="filter-btn" data-filter="daily">Daily Essentials</button>
              <button className="filter-btn" data-filter="beauty">Glow &amp; Hormone</button>
              <button className="filter-btn" data-filter="gut">Digestive Care</button>
            </div>
          </div>

          <div className="products-grid">
            {/* Product 1: Himalayan Shilajit */}
            <article className="product-item" data-category="stamina">
              <div className="prod-badge">Gold Grade</div>
              <div className="prod-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/ListingShilajitResinSlide01Update.jpg" alt="Pure Himalayan Shilajit Resin" className="primary-img" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/ListingShilajitResinSlide02Upgrade.jpg" alt="Pure Himalayan Shilajit Resin benefits" className="hover-img" loading="lazy" />
                <button className="quick-view-btn" data-product="shilajit">Quick Look</button>
              </div>
              <div className="prod-details">
                <div className="prod-rating">
                  <span className="stars">★★★★★</span>
                  <span className="review-count">(1,240 reviews)</span>
                </div>
                <h3 className="prod-name">Pure Himalayan Shilajit Resin with Fulvic Acid</h3>
                <p className="prod-subtitle">Sourced from 18,000+ ft Himalayan altitudes • Boosts endurance &amp; vigour</p>
                <div className="prod-price-row">
                  <div className="price-box">
                    <span className="current-price">₹899</span>
                    <span className="original-price">₹1,499</span>
                    <span className="discount-badge">40% OFF</span>
                  </div>
                  <button
                    className="btn btn-add-cart"
                    data-id="shilajit"
                    data-name="Pure Himalayan Shilajit Resin"
                    data-price="899"
                    data-img="/health-veda-organics-vegan-products-be-vegan.assets/ListingShilajitResinSlide01Update.jpg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>

            {/* Product 2: Sea Buckthorn */}
            <article className="product-item" data-category="daily">
              <div className="prod-badge">Editor&apos;s Pick</div>
              <div className="prod-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/Listing_Sea_Buckthorn_Slide_01_New_1_1.jpg" alt="Sea Buckthorn Cold Pressed Capsules" className="primary-img" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/ListingSeaBuckthornSlide03.jpg" alt="Sea Buckthorn details" className="hover-img" loading="lazy" />
                <button className="quick-view-btn" data-product="seabuckthorn">Quick Look</button>
              </div>
              <div className="prod-details">
                <div className="prod-rating">
                  <span className="stars">★★★★★</span>
                  <span className="review-count">(890 reviews)</span>
                </div>
                <h3 className="prod-name">Sea Buckthorn Superfruit Formulation</h3>
                <p className="prod-subtitle">Rich source of rare Omega 7, 3, 6 &amp; 9 fatty acids for heart and skin health</p>
                <div className="prod-price-row">
                  <div className="price-box">
                    <span className="current-price">₹549</span>
                    <span className="original-price">₹899</span>
                    <span className="discount-badge">39% OFF</span>
                  </div>
                  <button
                    className="btn btn-add-cart"
                    data-id="seabuckthorn"
                    data-name="Sea Buckthorn Superfruit Formulation"
                    data-price="549"
                    data-img="/health-veda-organics-vegan-products-be-vegan.assets/Listing_Sea_Buckthorn_Slide_01_New_1_1.jpg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>

            {/* Product 3: Magnesium Glycinate */}
            <article className="product-item" data-category="daily">
              <div className="prod-badge">Deep Sleep</div>
              <div className="prod-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/Listing_Magnesium_Glycinate_Slide_01_WC.jpg" alt="Plant Based Magnesium Glycinate" className="primary-img" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/Listing_Magnesium_Glycinate_Slide_02_-For_Amazon_Zenics_1.jpg" alt="Magnesium Glycinate facts" className="hover-img" loading="lazy" />
                <button className="quick-view-btn" data-product="magnesium">Quick Look</button>
              </div>
              <div className="prod-details">
                <div className="prod-rating">
                  <span className="stars">★★★★★</span>
                  <span className="review-count">(640 reviews)</span>
                </div>
                <h3 className="prod-name">Chelated Magnesium Glycinate 100% Vegan</h3>
                <p className="prod-subtitle">Non-drowsy neuromuscular calming, nocturnal muscle relaxation &amp; deep rest</p>
                <div className="prod-price-row">
                  <div className="price-box">
                    <span className="current-price">₹629</span>
                    <span className="original-price">₹999</span>
                    <span className="discount-badge">37% OFF</span>
                  </div>
                  <button
                    className="btn btn-add-cart"
                    data-id="magnesium"
                    data-name="Chelated Magnesium Glycinate Vegan"
                    data-price="629"
                    data-img="/health-veda-organics-vegan-products-be-vegan.assets/Listing_Magnesium_Glycinate_Slide_01_WC.jpg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>

            {/* Product 4: Calcium Magnesium Zinc */}
            <article className="product-item" data-category="daily">
              <div className="prod-badge">Bones &amp; Posture</div>
              <div className="prod-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/01.CalciumMagnesiummZinc_UpperListing_Slide01New.jpg" alt="Calcium Magnesium Zinc with Vitamin D3" className="primary-img" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/Back_c2ff1ac5-9a89-4357-9a1b-b0365e01dbb8.jpg" alt="Calcium formula nutritional facts back" className="hover-img" loading="lazy" />
                <button className="quick-view-btn" data-product="calcium">Quick Look</button>
              </div>
              <div className="prod-details">
                <div className="prod-rating">
                  <span className="stars">★★★★★</span>
                  <span className="review-count">(2,110 reviews)</span>
                </div>
                <h3 className="prod-name">Calcium Magnesium Zinc + Plant Vitamin D3</h3>
                <p className="prod-subtitle">Formulated with Lichen-derived Vitamin D3 &amp; Menaquinone K2-7</p>
                <div className="prod-price-row">
                  <div className="price-box">
                    <span className="current-price">₹499</span>
                    <span className="original-price">₹799</span>
                    <span className="discount-badge">38% OFF</span>
                  </div>
                  <button
                    className="btn btn-add-cart"
                    data-id="calcium"
                    data-name="Calcium Magnesium Zinc + Vitamin D3"
                    data-price="499"
                    data-img="/health-veda-organics-vegan-products-be-vegan.assets/01.CalciumMagnesiummZinc_UpperListing_Slide01New.jpg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>

            {/* Product 5: Glutathione Builder */}
            <article className="product-item" data-category="beauty">
              <div className="prod-badge">Skin Luminescence</div>
              <div className="prod-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/Listing_Glutathione_Builder_Slide_01.jpg" alt="Glutathione Builder Vegan Tablets" className="primary-img" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/Listing_Glutathione_Builder_Slide_02.jpg" alt="Glutathione Builder benefits" className="hover-img" loading="lazy" />
                <button className="quick-view-btn" data-product="glutathione">Quick Look</button>
              </div>
              <div className="prod-details">
                <div className="prod-rating">
                  <span className="stars">★★★★★</span>
                  <span className="review-count">(950 reviews)</span>
                </div>
                <h3 className="prod-name">Plant-Based Glutathione Builder with ALA</h3>
                <p className="prod-subtitle">Master antioxidant complex with Vitamin C &amp; Rosemary to diminish pigmentation</p>
                <div className="prod-price-row">
                  <div className="price-box">
                    <span className="current-price">₹749</span>
                    <span className="original-price">₹1,299</span>
                    <span className="discount-badge">42% OFF</span>
                  </div>
                  <button
                    className="btn btn-add-cart"
                    data-id="glutathione"
                    data-name="Plant-Based Glutathione Builder"
                    data-price="749"
                    data-img="/health-veda-organics-vegan-products-be-vegan.assets/Listing_Glutathione_Builder_Slide_01.jpg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>

            {/* Product 6: PCOS Balance */}
            <article className="product-item" data-category="beauty">
              <div className="prod-badge">Hormonal Harmony</div>
              <div className="prod-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/a._Listing_PCOS_Slide_01_New.jpg" alt="Plant-Based PCOS Management Formulation" className="primary-img" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/Listing_PCOS_Slide_02_WC.jpg" alt="PCOS Supplement Details" className="hover-img" loading="lazy" />
                <button className="quick-view-btn" data-product="pcos">Quick Look</button>
              </div>
              <div className="prod-details">
                <div className="prod-rating">
                  <span className="stars">★★★★★</span>
                  <span className="review-count">(1,480 reviews)</span>
                </div>
                <h3 className="prod-name">PCOS &amp; PCOD Care Balance Tablets</h3>
                <p className="prod-subtitle">Myo-Inositol, Shatavari &amp; Folic Acid formulation for cycle regularity</p>
                <div className="prod-price-row">
                  <div className="price-box">
                    <span className="current-price">₹699</span>
                    <span className="original-price">₹1,199</span>
                    <span className="discount-badge">41% OFF</span>
                  </div>
                  <button
                    className="btn btn-add-cart"
                    data-id="pcos"
                    data-name="PCOS &amp; PCOD Care Balance"
                    data-price="699"
                    data-img="/health-veda-organics-vegan-products-be-vegan.assets/a._Listing_PCOS_Slide_01_New.jpg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>

            {/* Product 7: Digestive Enzyme */}
            <article className="product-item" data-category="gut">
              <div className="prod-badge">Gut Comfort</div>
              <div className="prod-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/a._Listing_Digestive_Enzyme_Slide_01.jpg" alt="Plant Based Digestive Enzymes" className="primary-img" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/Listing_Digestive_Enzyme_Slide_02_WWC.jpg" alt="Digestive Enzyme facts" className="hover-img" loading="lazy" />
                <button className="quick-view-btn" data-product="enzymes">Quick Look</button>
              </div>
              <div className="prod-details">
                <div className="prod-rating">
                  <span className="stars">★★★★★</span>
                  <span className="review-count">(720 reviews)</span>
                </div>
                <h3 className="prod-name">Multi-Spectrum Plant Digestive Enzymes</h3>
                <p className="prod-subtitle">Amylase, Protease &amp; Lipase complex to ease bloating, gas &amp; heavy meals</p>
                <div className="prod-price-row">
                  <div className="price-box">
                    <span className="current-price">₹529</span>
                    <span className="original-price">₹849</span>
                    <span className="discount-badge">38% OFF</span>
                  </div>
                  <button
                    className="btn btn-add-cart"
                    data-id="enzymes"
                    data-name="Multi-Spectrum Digestive Enzymes"
                    data-price="529"
                    data-img="/health-veda-organics-vegan-products-be-vegan.assets/a._Listing_Digestive_Enzyme_Slide_01.jpg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>

            {/* Product 8: Iron & Folic Acid */}
            <article className="product-item" data-category="daily">
              <div className="prod-badge">Energy &amp; Blood</div>
              <div className="prod-image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/Listing_Iron_Folic_Acid_Slide_01_New_WC.jpg" alt="Plant-Based Iron &amp; Folic Acid" className="primary-img" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/Listing_Iron_Folic_Acid_Slide_02_WC.jpg" alt="Iron facts" className="hover-img" loading="lazy" />
                <button className="quick-view-btn" data-product="iron">Quick Look</button>
              </div>
              <div className="prod-details">
                <div className="prod-rating">
                  <span className="stars">★★★★★</span>
                  <span className="review-count">(530 reviews)</span>
                </div>
                <h3 className="prod-name">Plant-Based Iron + Active Folic Acid</h3>
                <p className="prod-subtitle">Gentle on the stomach, non-constipating formulation with Vitamin B12 &amp; Zinc</p>
                <div className="prod-price-row">
                  <div className="price-box">
                    <span className="current-price">₹479</span>
                    <span className="original-price">₹749</span>
                    <span className="discount-badge">36% OFF</span>
                  </div>
                  <button
                    className="btn btn-add-cart"
                    data-id="iron"
                    data-name="Plant-Based Iron + Folic Acid"
                    data-price="479"
                    data-img="/health-veda-organics-vegan-products-be-vegan.assets/Listing_Iron_Folic_Acid_Slide_01_New_WC.jpg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE SCIENCE OF VEDA & VERIFIED SUPPLEMENT FACTS */}
      <section className="science-depth-section" id="science">
        <div className="section-container">
          <div className="science-layout-grid">
            <div className="science-text-column">
              <span className="sub-label copper-label">BOTANICAL PURITY &amp; CLINICAL RIGOR</span>
              <h2 className="section-headline light-headline">Designed for Complete Cellular Bioavailability</h2>
              <p className="science-lead">
                Most mass-produced vitamins pass straight through the body unabsorbed because of synthetic salts and aggressive artificial binders. We formulate differently.
              </p>

              <div className="science-pillars">
                <div className="pillar-item">
                  <div className="pillar-icon">01</div>
                  <div className="pillar-content">
                    <h4>Whole-Food Botanical Co-Factors</h4>
                    <p>Our vitamins are paired with living plant phytonutrients, enzymes, and bioflavonoids exactly as found in wild flora.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon">02</div>
                  <div className="pillar-content">
                    <h4>Supercritical Clean Extraction</h4>
                    <p>Zero hexane, zero petroleum-derived alcohol solvents. We preserve thermal sensitivity and fragile enzymes.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon">03</div>
                  <div className="pillar-content">
                    <h4>Gastric-Gentle Vegetarian Shells</h4>
                    <p>100% plant-cellulose vegetarian delivery systems that dissolve predictably without stomach irritation.</p>
                  </div>
                </div>
              </div>

              <div className="science-cta-wrap">
                <Link href="#certifications" className="btn btn-copper">Inspect Lab Standards ↗</Link>
              </div>
            </div>

            <div className="science-visual-column">
              {/* SUPPLEMENT INGREDIENTS FACTS - LUXURY CLINICAL PRESENTATION */}
              <div className="supplement-facts-card" id="supplement-facts">
                <div className="facts-header-banner">
                  <div className="facts-header-top">
                    <div className="facts-heading-box">
                      <span className="facts-badge-kicker">Clinical Formulation Standards</span>
                      <h3 className="facts-title-main">Supplement Ingredients Facts</h3>
                    </div>
                  </div>
                  <p className="facts-sub">Advanced Bioavailable Osteo-Mineral &amp; Botanical Spectrum</p>
                </div>

                {/* Product Info Bar */}
                <div className="facts-product-info-bar">
                  <div className="info-pill">
                    <span className="info-lbl">Serving Size</span>
                    <strong>2 Tablets</strong>
                  </div>
                  <div className="info-pill">
                    <span className="info-lbl">Total Quantity</span>
                    <strong>60 Tablets (30 Days)</strong>
                  </div>
                  <div className="info-pill">
                    <span className="info-lbl">Formulation</span>
                    <strong>100% Plant-Based</strong>
                  </div>
                </div>

                {/* Nutritional Table */}
                <div className="facts-table-container">
                  <div className="table-header-row">
                    <span className="col-ing">Active Nutrients &amp; Source</span>
                    <span className="col-src">Source / Botanical Name</span>
                    <span className="col-amt">Each Serving</span>
                    <span className="col-rda">% RDA*</span>
                  </div>

                  <div className="table-body-scroll">
                    {/* 1. Calcium */}
                    <div className="fact-row">
                      <div className="col-ing">
                        <strong>1. Calcium</strong>
                        <span className="sub-detail">Source Qty: 2,100 mg</span>
                      </div>
                      <div className="col-src">Calcium Citrate Malate</div>
                      <div className="col-amt">500 mg</div>
                      <div className="col-rda"><span className="rda-badge">50%</span></div>
                    </div>

                    {/* 2. Magnesium */}
                    <div className="fact-row">
                      <div className="col-ing">
                        <strong>2. Magnesium</strong>
                        <span className="sub-detail">Source Qty: 470 mg</span>
                      </div>
                      <div className="col-src">Magnesium Glycinate (Chelated)</div>
                      <div className="col-amt">65 mg</div>
                      <div className="col-rda"><span className="rda-badge">17.5%</span></div>
                    </div>

                    {/* 3. Hadjod */}
                    <div className="fact-row highlight-botanical">
                      <div className="col-ing">
                        <strong>3. Hadjod Extract</strong>
                        <span className="sub-detail">Form: Pure Extract</span>
                      </div>
                      <div className="col-src"><em>Cissus Quadrangularis</em></div>
                      <div className="col-amt">100 mg</div>
                      <div className="col-rda"><span className="rda-established">**</span></div>
                    </div>

                    {/* 4. Zinc */}
                    <div className="fact-row">
                      <div className="col-ing">
                        <strong>4. Zinc</strong>
                        <span className="sub-detail">Source Qty: 42 mg</span>
                      </div>
                      <div className="col-src">Zinc Citrate</div>
                      <div className="col-amt">13.2 mg</div>
                      <div className="col-rda"><span className="rda-badge rda-100">100%</span></div>
                    </div>

                    {/* 5. Boron */}
                    <div className="fact-row">
                      <div className="col-ing">
                        <strong>5. Boron</strong>
                        <span className="sub-detail">Form: Boron Proteinate</span>
                      </div>
                      <div className="col-src">Boron Proteinate</div>
                      <div className="col-amt">3 mg</div>
                      <div className="col-rda"><span className="rda-established">**</span></div>
                    </div>

                    {/* 6. Manganese */}
                    <div className="fact-row">
                      <div className="col-ing">
                        <strong>6. Manganese</strong>
                        <span className="sub-detail">Form: Manganese Sulphate</span>
                      </div>
                      <div className="col-src">Manganese Sulphate</div>
                      <div className="col-amt">4 mg</div>
                      <div className="col-rda"><span className="rda-badge rda-100">100%</span></div>
                    </div>

                    {/* 7. Copper */}
                    <div className="fact-row">
                      <div className="col-ing">
                        <strong>7. Copper</strong>
                        <span className="sub-detail">Form: Copper Sulphate</span>
                      </div>
                      <div className="col-src">Copper Sulphate</div>
                      <div className="col-amt">1 mg</div>
                      <div className="col-rda"><span className="rda-badge">58.8%</span></div>
                    </div>

                    {/* 8. Vitamin D3 */}
                    <div className="fact-row highlight-vegan">
                      <div className="col-ing">
                        <strong>8. Vitamin D3 (Cholecalciferol)</strong>
                        <span className="sub-detail">Form: Cholecalciferol</span>
                      </div>
                      <div className="col-src">Vegetarian Lichen Source</div>
                      <div className="col-amt">600 IU (15 mcg)</div>
                      <div className="col-rda"><span className="rda-badge rda-100">100%</span></div>
                    </div>

                    {/* 9. Vitamin K2 */}
                    <div className="fact-row">
                      <div className="col-ing">
                        <strong>9. Vitamin K2</strong>
                        <span className="sub-detail">Form: MK-7</span>
                      </div>
                      <div className="col-src">Fermented Menaquinone MK-7</div>
                      <div className="col-amt">55 mcg</div>
                      <div className="col-rda"><span className="rda-badge rda-100">100%</span></div>
                    </div>

                    {/* 10. Alfalfa */}
                    <div className="fact-row highlight-botanical">
                      <div className="col-ing">
                        <strong>10. Alfalfa</strong>
                        <span className="sub-detail">Form: Leaf Powder</span>
                      </div>
                      <div className="col-src"><em>Medicago Sativa</em></div>
                      <div className="col-amt">50 mg</div>
                      <div className="col-rda"><span className="rda-established">**</span></div>
                    </div>

                    {/* 11. Moringa Oleifera */}
                    <div className="fact-row highlight-botanical">
                      <div className="col-ing">
                        <strong>11. Moringa Oleifera</strong>
                        <span className="sub-detail">Form: Stem Powder</span>
                      </div>
                      <div className="col-src">Moringa Oleifera Stem Powder</div>
                      <div className="col-amt">25 mg</div>
                      <div className="col-rda"><span className="rda-established">**</span></div>
                    </div>

                    {/* 12. Vitamin B12 */}
                    <div className="fact-row">
                      <div className="col-ing">
                        <strong>12. Vitamin B12</strong>
                        <span className="sub-detail">Form: Cyanocobalamin</span>
                      </div>
                      <div className="col-src">Cyanocobalamin</div>
                      <div className="col-amt">2.2 mcg</div>
                      <div className="col-rda"><span className="rda-badge rda-100">100%</span></div>
                    </div>

                    {/* 13. Folic Acid */}
                    <div className="fact-row">
                      <div className="col-ing">
                        <strong>13. Folic Acid</strong>
                        <span className="sub-detail">Provides: DFE 220 mcg</span>
                      </div>
                      <div className="col-src">Active Folate Complex</div>
                      <div className="col-amt">129.41 mcg</div>
                      <div className="col-rda"><span className="rda-badge rda-100">100%</span></div>
                    </div>
                  </div>
                  <div className="facts-footnote">
                    *%RDA based on ICMR-NIN dietary allowances. **Daily Value (% RDA) not established.
                  </div>
                </div>

                {/* Dosage & Protocol */}
                <div className="facts-usage-grid">
                  <div className="usage-box">
                    <span className="usage-icon">⏱️</span>
                    <div>
                      <strong>When to Consume:</strong>
                      <p>Take 2 tablets daily after a meal, or as directed by a healthcare professional.</p>
                    </div>
                  </div>
                  <div className="usage-box">
                    <span className="usage-icon">🌱</span>
                    <div>
                      <strong>Recommended Usage Statement:</strong>
                      <p>For best results, consume daily for 2–3 months along with regular exercise &amp; a balanced diet.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CERTIFICATIONS & SAFETY STANDARDS */}
      <section className="certifications-section" id="certifications">
        <div className="section-container">
          <div className="text-center cert-header">
            <span className="sub-label">GOLD STANDARD ASSURANCE</span>
            <h2 className="section-headline">Independently Verified &amp; Certified</h2>
            <p className="section-subtext">We test beyond industry requirements so you can trust every single dose.</p>
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

      {/* SECTION 7: VERIFIED CUSTOMER REVIEWS */}
      <section className="reviews-section" id="reviews">
        <div className="section-container">
          <div className="section-top-flex">
            <div>
              <span className="sub-label">REAL STORIES</span>
              <h2 className="section-headline">Loved by Over 500,000+ Conscious Humans</h2>
            </div>
            <div className="rating-summary-pill">
              <span className="stars-gold">★★★★★</span>
              <strong>4.8 / 5.0</strong> based on 14,200+ verified ratings
            </div>
          </div>

          <div className="reviews-masonry">
            <div className="review-bubble">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/health-veda-organics-vegan-products-be-vegan.assets/Review_01.1.png" alt="Customer Verified Review 1" className="review-asset-img" loading="lazy" />
              <div className="review-caption">
                <span className="buyer-badge">✓ Verified Buyer</span>
                <p className="review-quote">&ldquo;After switching to Health Veda Shilajit and Magnesium, my recovery from intense workouts and sleep quality has improved dramatically without any morning grogginess!&rdquo;</p>
                <span className="reviewer-name">— Ananya Sharma, Bangalore</span>
              </div>
            </div>

            <div className="review-bubble">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/health-veda-organics-vegan-products-be-vegan.assets/Review_02.2.png" alt="Customer Verified Review 2" className="review-asset-img" loading="lazy" />
              <div className="review-caption">
                <span className="buyer-badge">✓ Verified Buyer</span>
                <p className="review-quote">&ldquo;The Sea Buckthorn capsules are a miracle for dry skin during North Indian winters. Truly 100% plant-derived without fishy aftertastes.&rdquo;</p>
                <span className="reviewer-name">— Rajesh Patel, Mumbai</span>
              </div>
            </div>

            <div className="review-bubble">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/health-veda-organics-vegan-products-be-vegan.assets/Review_03.3.png" alt="Customer Verified Review 3" className="review-asset-img" loading="lazy" />
              <div className="review-caption">
                <span className="buyer-badge">✓ Verified Buyer</span>
                <p className="review-quote">&ldquo;As someone struggling with PCOS for 4 years, their plant-based formulation brought back my normal hormonal cycle within 3 months. Invaluable!&rdquo;</p>
                <span className="reviewer-name">— Priya Sengupta, Kolkata</span>
              </div>
            </div>

            <div className="review-bubble">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/health-veda-organics-vegan-products-be-vegan.assets/Review_04.4.png" alt="Customer Verified Review 4" className="review-asset-img" loading="lazy" />
              <div className="review-caption">
                <span className="buyer-badge">✓ Verified Buyer</span>
                <p className="review-quote">&ldquo;Clean ingredients, transparent lab results, and zero bloat. Their Calcium Magnesium Zinc is now a permanent staple on my kitchen counter.&rdquo;</p>
                <span className="reviewer-name">— Dr. Vikram Mehta, New Delhi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: AS SEEN IN & PARTNERS */}
      <section className="press-partners-section">
        <div className="section-container">
          <p className="partners-title">FEATURED IN LEADING EDITORIALS &amp; TRUSTED RETAIL PLATFORMS</p>
          <div className="partners-logos-marquee">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/health-veda-organics-vegan-products-be-vegan.assets/Amazon-logo_1024x1024.jpg" alt="Amazon India" className="partner-logo" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/health-veda-organics-vegan-products-be-vegan.assets/Health_Veda_-_Nykaa_1024x1024.png" alt="Nykaa" className="partner-logo" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/health-veda-organics-vegan-products-be-vegan.assets/tata_1mg-logo_1024x1024.jpg" alt="Tata 1mg" className="partner-logo" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/health-veda-organics-vegan-products-be-vegan.assets/Healthkart-logo_1024x1024.jpg" alt="Healthkart" className="partner-logo" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/health-veda-organics-vegan-products-be-vegan.assets/jiomart-logo_1024x1024.jpg" alt="JioMart" className="partner-logo" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/health-veda-organics-vegan-products-be-vegan.assets/netmeds_7a654727-ac47-421c-abec-e309d5ebdee5_1024x1024.jpg" alt="Netmeds" className="partner-logo" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/health-veda-organics-vegan-products-be-vegan.assets/TOI_logo_1024x1024.webp" alt="Times of India" className="partner-logo" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/health-veda-organics-vegan-products-be-vegan.assets/indian-express-financial-express-division-royapettah-chennai-newspaper-vendors-l7311j244i_1_1024x1024.webp" alt="Indian Express" className="partner-logo" loading="lazy" />
          </div>
        </div>
      </section>

      {/* SECTION 9: EDITORIAL WELLNESS JOURNAL */}
      <section className="editorial-journal-section" id="journal">
        <div className="section-container">
          <div className="section-top-flex">
            <div>
              <span className="sub-label">THE VEDA JOURNAL</span>
              <h2 className="section-headline">Holistic Living &amp; Botanical Research</h2>
            </div>
            <Link href="#" className="view-all-link">Browse All Articles ↗</Link>
          </div>

          <div className="journal-articles-grid">
            <article className="journal-card">
              <div className="journal-cover">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/Web_blog_banner_Ashwaganda.jpg" alt="Ashwagandha adaptogen guide" loading="lazy" />
                <span className="journal-tag">Adaptogens</span>
              </div>
              <div className="journal-info">
                <span className="journal-date">September 2026 • 5 min read</span>
                <h3>The Ancient Science of Ashwagandha: How Adaptogens Modulate Cortisol</h3>
                <p>Discover how Withanolides optimize your endocrine response to high-stress modern work environments.</p>
                <Link href="#" className="read-more">Read Essay ↗</Link>
              </div>
            </article>

            <article className="journal-card">
              <div className="journal-cover">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/Web_blog_banner_Glucosamine.jpg" alt="Glucosamine and joint mobility" loading="lazy" />
                <span className="journal-tag">Joint Health</span>
              </div>
              <div className="journal-info">
                <span className="journal-date">August 2026 • 7 min read</span>
                <h3>Rebuilding Synovial Fluid &amp; Cartilage Integrity Without Shellfish</h3>
                <p>Why plant-fermented glucosamine provides a sustainable, allergen-free foundation for longevity.</p>
                <Link href="#" className="read-more">Read Essay ↗</Link>
              </div>
            </article>

            <article className="journal-card">
              <div className="journal-cover">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/health-veda-organics-vegan-products-be-vegan.assets/Web_blog_banner_Melatonin_626ff6cc-b966-409a-b97c-7454752d2d65.jpg" alt="Melatonin and circadian rhythm" loading="lazy" />
                <span className="journal-tag">Circadian Science</span>
              </div>
              <div className="journal-info">
                <span className="journal-date">July 2026 • 4 min read</span>
                <h3>Mastering Deep Delta Waves: Why Chamomile &amp; Magnesium Outperform Synthetic Sedatives</h3>
                <p>How supporting GABA neurotransmitters unlocks restorative REM sleep naturally.</p>
                <Link href="#" className="read-more">Read Essay ↗</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CINEMATIC CTA */}
      <section className="final-cta-section">
        <div className="section-container">
          <div className="cta-banner-card">
            <div className="cta-content-column">
              <span className="sub-label copper-label">TRANSFORM YOUR ROUTINE</span>
              <h2 className="cta-heading">Better Daily Wellness, Thoughtfully Formulated.</h2>
              <p className="cta-description">Join hundreds of thousands making the conscious switch to pure, 100% plant-based organic nutrition crafted for longevity.</p>
              
              <div className="cta-buttons-group">
                <Link href="#products" className="btn btn-primary-light">Explore All Formulations</Link>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">Consult a Wellness Advisor</a>
              </div>

              <div className="cta-guarantees">
                <span>🛡️ 30-Day Happiness Guarantee</span>
                <span>🚚 Free Express Shipping</span>
                <span>🌿 100% Vegan Certified</span>
              </div>
            </div>

            <div className="cta-visual-column">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/health-veda-organics-vegan-products-be-vegan.assets/Wellness_wave_sale_desktop_1.jpg" alt="Health Veda Wellness Wave Celebration" className="cta-hero-banner" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

