import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Black CTC Tea (All Grades)",
    slug: "black-ctc-tea",
    category: "CTC",
    description: "Premium Black CTC Tea directly from Assam & Dooars. All grades (BP, OF, Dust) available for wholesale and bulk supply.",
    longDescription: `
      <section>
        <p>Manish Tea Traders brings you <strong>premium Black CTC Tea</strong> directly from the renowned tea estates of Assam and Dooars. As one of Siliguri's leading tea wholesalers, we supply all commercial grades suitable for tea distributors, retailers, hotels, tea stall owners, and private label manufacturers across India.</p>
      </section>

      <section>
        <h3>Available Grades (Non-Blended, Garden Fresh)</h3>
        <ul>
          <li><strong>OF (Orange Fannings)</strong> - Rapid infusion, strong color</li>
          <li><strong>BP (Broken Pekoe)</strong> - Large grain, balanced flavor</li>
          <li><strong>BOP (Broken Orange Pekoe)</strong> - Premium household grade</li>
          <li><strong>BOPSM (Broken Orange Pekoe Superior Medium)</strong> - Extra fine quality, superior liquor</li>
          <li><strong>PD (Pekoe Dust)</strong> - High strength, commercial use</li>
          <li><strong>RD (Red Dust)</strong> - Instant color, tea stall favorite</li>
          <li><strong>Dust Grade</strong> - Maximum extraction, cost-effective</li>
        </ul>
      </section>

      <section>
        <h3>Why Choose Manish Tea Traders?</h3>
        <div>
          <h4>🌿 Direct Estate Sourcing</h4>
          <p>We procure directly from Assam and Dooars tea estates, eliminating middlemen and ensuring competitive wholesale rates for bulk buyers.</p>
          
          <h4>✅ Quality Assurance</h4>
          <ul>
            <li>Vacuum-tested for moisture content</li>
            <li>Garden-fresh, non-blended stock</li>
            <li>Consistent grade uniformity</li>
            <li>Laboratory tested for quality parameters</li>
          </ul>

          <h4>📦 Flexible Packaging Options</h4>
          <ul>
            <li>Standard: 26kg - 35kg Jute/PP Sacks</li>
            <li>Custom packaging available for bulk orders</li>
            <li>Moisture-resistant packing for long shelf life</li>
          </ul>

          <h4>🚚 Pan India Distribution Network</h4>
          <p>Serving tea traders and wholesalers in Siliguri (HQ), Kolkata, Patna, Bihar, Jaipur, and all major cities across India.</p>
        </div>
      </section>

      <section>
        <h3>Ideal For (B2B Applications)</h3>
        <dl>
          <dt><strong>Tea Distributors & Wholesalers</strong></dt>
          <dd>Perfect for creating proprietary blends and regional variants. Each grade is carefully segregated for consistent quality across batches.</dd>
          
          <dt><strong>Tea Packers & Private Label Manufacturers</strong></dt>
          <dd>Non-blended stock allows you to create custom blends under your brand name. We support white-label partnerships with flexible MOQ.</dd>
          
          <dt><strong>Hotels, Restaurants & Caterers (HoReCa)</strong></dt>
          <dd>BP and BOP grades deliver the perfect balance of flavor and color for commercial use.</dd>
          
          <dt><strong>Tea Stall Owners & Roadside Vendors</strong></dt>
          <dd>OF and Dust grades provide instant color and strong liquor, essential for high-volume tea preparation.</dd>
        </dl>
      </section>

      <section>
        <h3>What Makes Our CTC Tea Special?</h3>
        <p><strong>Authentic Dooars & Assam Character:</strong> Sourced from the fertile alluvial plains where tea cultivation is an art perfected over generations. The unique terroir imparts a distinctive malty sweetness and brisk character.</p>
        
        <h4>Grade-Specific Benefits</h4>
        <ul>
          <li><strong>Orange Fannings (OF):</strong> Fine particles ensure rapid infusion and immediate color development.</li>
          <li><strong>Broken Pekoe (BP):</strong> Larger leaf particles retain essential oils, delivering a fuller flavor profile.</li>
          <li><strong>Broken Orange Pekoe Superior Medium (BOPSM):</strong> Exceptional liquor clarity and smooth mouthfeel.</li>
          <li><strong>Pekoe Dust (PD) & Red Dust (RD):</strong> Maximum surface area ensures powerful extraction for blends.</li>
        </ul>
      </section>

      <section>
        <h3>Wholesale Pricing & Bulk Purchase Benefits</h3>
        <ul>
          <li>Competitive rates starting from ₹130/kg</li>
          <li>Volume-based discounts (1000kg+)</li>
          <li>Monthly contracts for regular buyers</li>
          <li>Transparent pricing with no hidden costs</li>
        </ul>
      </section>

      <section>
        <h3>Quality Control Process</h3>
        <ol>
          <li><strong>Estate Selection</strong> - Partner gardens vetted for consistency</li>
          <li><strong>Harvest Monitoring</strong> - Peak-season flush procurement</li>
          <li><strong>Grade Segregation</strong> - Mechanical and manual sorting</li>
          <li><strong>Moisture Testing</strong> - Vacuum testing before packaging</li>
          <li><strong>Sample Testing</strong> - Liquor, color, and aroma evaluation</li>
          <li><strong>Final Packaging</strong> - Moisture-proof sacks with batch coding</li>
        </ol>
      </section>

      <section>
        <h3>How to Order</h3>
        <p><strong>Step 1:</strong> Choose Your Grade<br/>
        <strong>Step 2:</strong> Request Bulk Quotation<br/>
        <strong>Step 3:</strong> Sample Testing (Optional)<br/>
        <strong>Step 4:</strong> Confirm Order<br/>
        <strong>Step 5:</strong> Delivery (3-7 business days)</p>
      </section>

      <section>
        <h3>Frequently Asked Questions (FAQ)</h3>
        <p><strong>Q: What is the minimum order quantity?</strong><br/>
        A: 500 kg is our standard MOQ for wholesale orders.</p>
        <p><strong>Q: Do you provide samples?</strong><br/>
        A: Yes, we provide chargeable samples (adjustable against bulk orders).</p>
        <p><strong>Q: Do you ship outside West Bengal?</strong><br/>
        A: Yes, we have pan-India delivery capabilities.</p>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> In Stock</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 3-7 business days</li>
              <li class="flex gap-2"><span>💳</span> <strong>Payment:</strong> Advance / Credit (Verified)</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">SEO Coverage</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Tea wholesaler Siliguri • CTC tea supplier Siliguri • Bulk tea dealer Siliguri • Assam tea wholesale • Dooars tea distributor • Black tea wholesaler West Bengal • Tea traders in Siliguri • Wholesale tea prices Siliguri • CTC tea grades • Tea supplier North Bengal
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | All prices subject to market conditions and GST
        </div>
      </section>
    `,
    priceRange: "₹130.00 – ₹320.00 / kg",
    imageUrl: "/images/products/organic_ctc_tea_user.webp",
    imageAlt: "CTC Tea Wholesale Supplier  BP OF Grades - Manish Tea Traders Siliguri",
    badge: "Best Seller",
    sku: "CTC-BLK-001",
    moq: "500 kg",
    stockStatus: "In Stock",
    specifications: {
      "Origin": "Assam / Dooars",
      "Type": "CTC Granules",
      "Available Grades": "OF, BP, BOP, BOPSM, PD, RD, Dust",
      "Packaging": "Jute/PP Sack (26kg - 35kg)",
      "Shelf Life": "12 Months",
      "GST": "5% (HS Code: 0902)"
    }
  },
  {
    id: "p2",
    name: "Rajni Gold",
    slug: "rajni-gold",
    category: "Blend",
    description: "Premium proprietary CTC blend (60% Assam BP / 40% Dooars OF) designed for consistent retail taste and high margins.",
    longDescription: `
      <section>
        <p><strong>Rajni Gold</strong> is our flagship proprietary blend, engineered specifically for retailers and distributors who demand consistency, quality, and profitability. In the competitive retail tea market, brand loyalty is built on one simple promise: the same great taste, every single time.</p>
      </section>

      <section>
        <h3>The Science Behind the Blend</h3>
        <p>We don't leave taste to chance. Our master blenders have perfected a scientifically calibrated formula that remains unchanged batch after batch:</p>
        <ul>
          <li><strong>60% Assam BP (Broken Pekoe)</strong> - Delivers the deep, malty sweetness and full-bodied character that North Indian consumers expect in their morning chai.</li>
          <li><strong>40% Dooars OF (Orange Fannings)</strong> - Contributes rapid color development, briskness, and that signature reddish-brown liquor strength.</li>
        </ul>
        <p>This ratio isn't arbitrary—it's the result of extensive market testing and feedback from over 200 retail partners across North India.</p>
      </section>

      <section>
        <h3>Perfect for the 'Kadak Chai' Culture</h3>
        <ul>
          <li>✓ <strong>Strong Morning Brew</strong> - Robust enough to cut through milk and sugar</li>
          <li>✓ <strong>No Bitter Aftertaste</strong> - Smooth finish even when brewed longer</li>
          <li>✓ <strong>Consistent Color</strong> - Rich, inviting liquor color that looks premium</li>
          <li>✓ <strong>Aromatic Profile</strong> - Malty notes with subtle floral undertones</li>
          <li>✓ <strong>Multi-Brew Versatility</strong> - Performs equally well in traditional boiling or tea bags</li>
        </ul>
      </section>

      <section>
        <h3>Business Benefits Summary</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Benefit</th>
                <th class="p-2 border">Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border">Consistent Blend Formula</td>
                <td class="p-2 border">Zero customer complaints about taste variation</td>
              </tr>
              <tr>
                <td class="p-2 border">Competitive Wholesale Rate</td>
                <td class="p-2 border">30-40% margin potential for retailers</td>
              </tr>
              <tr>
                <td class="p-2 border">Premium Market Positioning</td>
                <td class="p-2 border">Compete with ₹400-500/kg brands</td>
              </tr>
              <tr>
                <td class="p-2 border">Fast Inventory Turnover</td>
                <td class="p-2 border">Proven consumer acceptance = quick sales</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3>Why Retailers Choose Rajni Gold</h3>
        <dl>
          <dt><strong>Unmatched Consistency</strong></dt>
          <dd>Your customers get the exact same taste every month. No surprises, no complaints.</dd>
          
          <dt><strong>High Margin Potential</strong></dt>
          <dd>Offers the taste profile of top brands selling at ₹400-500/kg, but at wholesale prices that allow for 30-40% higher margins.</dd>
          
          <dt><strong>Ready Market Acceptance</strong></dt>
          <dd>The blend profile matches consumer expectations built by leading national brands, ensuring faster inventory turnover.</dd>
        </dl>
      </section>

      <section>
        <h3>Premium Jar Packaging</h3>
        <p>Available in a <strong>premium 3kg PET jar</strong>—perfect for:</p>
        <ul>
          <li>High shelf visibility and retail display</li>
          <li>Moisture protection and extended freshness</li>
          <li>Reusable container that adds perceived value</li>
          <li>Ideal for gifting and bulk household storage</li>
        </ul>
      </section>

      <section>
        <h3>Quality Assurance Promise</h3>
        <p>Every batch of Rajni Gold undergoes rigorous testing:</p>
        <ol>
          <li>Visual grading for correct BP:OF ratio</li>
          <li>Liquor testing for color and strength</li>
          <li>Organoleptic evaluation by certified tasters</li>
          <li>Moisture content verification (below 7%)</li>
          <li>Master sample matching before final packaging</li>
        </ol>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> In Stock</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 3-7 business days</li>
              <li class="flex gap-2"><span>💳</span> <strong>Payment:</strong> Advance / Credit (Verified)</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Market Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Retail Grocery Stores • Kiryana Shops • Tea Wholesalers • Corporate Pantry Suppliers • Hotel Chains • Private Label Brands
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | Proprietary Blend #BLEND-RAJ-001
        </div>
      </section>
    `,
    priceRange: "Contact for Wholesale Price",
    imageUrl: "/images/products/rajni_gold.webp",
    imageAlt: "Rajni Gold Premium CTC Blend Wholesale Supplier - Manish Tea Traders Siliguri",
    badge: "Premium",
    sku: "BLEND-RAJ-001",
    moq: "50 kg (Mixed Packs)",
    stockStatus: "In Stock",
    specifications: {
      "Type": "Blended CTC",
      "Formula": "60% Assam BP / 40% Dooars OF",
      "Liquor": "Strong & Bright",
      "Usage": "Household / Retail / Hotels",
      "Packaging": "3kg PET Jar / Bulk Bags",
      "MOQ": "50 kg"
    }
  },
  {
    id: "p3",
    name: "Begam Gold",
    slug: "begam-gold",
    category: "Blend",
    description: "Deep red 'Lal Ghoda' liquor tea sourced from heavy-liquoring Dooars gardens. Built for traditional boiling methods.",
    longDescription: `
      <section>
        <p>In the traditional Indian tea market, there's an unspoken rule: <strong>"Chai must look like chai."</strong> Before taste, before aroma, comes color. The deep, rich, inviting red-brown liquor that signals strength and quality at first glance. <strong>Begam Gold</strong> is engineered precisely for this discerning market segment—where visual impact drives purchase decisions and repeat sales.</p>
      </section>

      <section>
        <h3>The "Lal Ghoda" Standard</h3>
        <p>Begam Gold delivers what tea connoisseurs in Bihar, UP, and traditional markets call <strong>"Lal Ghoda" (Red Horse) color</strong>—that intensely dark, reddish-brown liquor that appears instantly when milk is added. This isn't achieved through artificial coloring or dust-heavy blends. It's the result of carefully sourcing from select heavy-liquoring gardens in the Dooars region known for producing high-tannin, color-rich tea.</p>
      </section>

      <section>
        <h3>Regional Market Expertise</h3>
        <p>We understand that India doesn't drink tea the same way everywhere. In Bihar, UP, Jharkhand, and parts of MP, tea culture revolves around the traditional boiling method:</p>
        <ul>
          <li>Tea leaves boiled directly with water for 5-10 minutes</li>
          <li>Milk added and brought to a rolling boil</li>
          <li>Sugar incorporated during the boiling process</li>
          <li>Often re-boiled when serving the second round</li>
        </ul>
        <p>Most blends collapse under this rigorous treatment—losing color, turning bitter, or producing a weak, washed-out cup. <strong>Begam Gold thrives in these conditions.</strong></p>
      </section>

      <section>
        <h3>Built for Boiling: Superior Heat Stability</h3>
        <div>
          <h4>Why Begam Gold Different</h4>
          <ul>
            <li><strong>High Tannin Content:</strong> Sourced from Dooars gardens producing naturally high-polyphenol teas that maintain color intensity even when boiled repeatedly.</li>
            <li><strong>Coarse Particle Selection:</strong> Larger CTC granules release flavor and color gradually, preventing that "burnt" taste that comes from over-extraction.</li>
            <li><strong>Color Retention Technology:</strong> Our blending process prioritizes grades that maintain liquor color even when diluted with milk or boiled repeatedly.</li>
            <li><strong>Consistent Density:</strong> Every batch delivers the same deep color and strength.</li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Performance Characteristics</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Brewing Method</th>
                <th class="p-2 border">Color Development</th>
                <th class="p-2 border">Strength</th>
                <th class="p-2 border">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border">Traditional Boiling (5-10 min)</td>
                <td class="p-2 border">Deep Red-Brown</td>
                <td class="p-2 border">Full-Bodied, Robust</td>
                <td class="p-2 border">Family consumption, roadside stalls</td>
              </tr>
              <tr>
                <td class="p-2 border">Re-boiling/Second Round</td>
                <td class="p-2 border">Maintains 80%+ color</td>
                <td class="p-2 border">Strong, no bitterness</td>
                <td class="p-2 border">Multi-serving scenarios</td>
              </tr>
              <tr>
                <td class="p-2 border">Quick Brew (3 min)</td>
                <td class="p-2 border">Rich Color within minutes</td>
                <td class="p-2 border">Medium-Strong</td>
                <td class="p-2 border">Modern households</td>
              </tr>
              <tr>
                <td class="p-2 border">Pressure Cooker Method</td>
                <td class="p-2 border">Excellent color stability</td>
                <td class="p-2 border">Very Strong</td>
                <td class="p-2 border">Bulk preparation for events</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3>Target Markets & Consumer Segments</h3>
        <p><strong>Primary Markets:</strong> Bihar, Uttar Pradesh, Jharkhand, Madhya Pradesh, North Bengal.</p>
        <h4>Ideal Consumer Profile</h4>
        <ul>
          <li>✓ <strong>Traditional Households</strong> - Multi-generational families who prepare large batches</li>
          <li>✓ <strong>Tea Stall Owners</strong> - Need consistent color across multiple servings</li>
          <li>✓ <strong>Bulk Consumers</strong> - Offices, factories, community kitchens</li>
          <li>✓ <strong>Price-Conscious Buyers</strong> - Want premium appearance without premium pricing</li>
          <li>✓ <strong>Heavy Tea Drinkers</strong> - 4-6 cups daily, need robust flavor that doesn't fade</li>
        </ul>
      </section>

      <section>
        <h3>Why Retailers Stock Begam Gold</h3>
        <ol>
          <li><strong>Immediate Visual Differentiation:</strong> When customers see that deep red color, they perceive value.</li>
          <li><strong>Regional Market Fit:</strong> If you're supplying Bihar or UP, Begam Gold speaks the local tea language.</li>
          <li><strong>Volume Sales Potential:</strong> Traditional consumers use more tea per serving and drink more frequently.</li>
          <li><strong>Competitive Positioning:</strong> Sits between economy dust and premium brands—the "sweet spot" of value.</li>
          <li><strong>Multi-Use Versatility:</strong> Household, tea stalls, catering, and private label potential.</li>
        </ol>
      </section>

      <section>
        <h3>The Dooars Advantage</h3>
        <p>The Dooars region's unique terroir produces teas with higher natural tannin levels, stronger color compounds (theaflavins), and better heat resistance. We source exclusively from gardens that specialize in these characteristics.</p>
      </section>

      <section>
        <h3>Quality Control for Regional Preferences</h3>
        <ul>
          <li>✓ <strong>Boiling Method Simulation:</strong> Tea boiled with water for 10 minutes, then milk added.</li>
          <li>✓ <strong>Color Measurement:</strong> Standardized charts used to ensure "Lal Ghoda" consistency.</li>
          <li>✓ <strong>Re-boil Testing:</strong> Second and third boils evaluated for color retention.</li>
          <li>✓ <strong>Milk Compatibility:</strong> Tested with varying milk-to-tea ratios.</li>
        </ul>
      </section>

      <section>
        <h3>Business Benefits for Distributors</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Advantage</th>
                <th class="p-2 border">Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border">Regional Specialization</td>
                <td class="p-2 border">Dominates in traditional tea-drinking markets</td>
              </tr>
              <tr>
                <td class="p-2 border">High Consumption Rate</td>
                <td class="p-2 border">Customers use more, buy more frequently</td>
              </tr>
              <tr>
                <td class="p-2 border">Visual Satisfaction</td>
                <td class="p-2 border">Fewer complaints, higher repeat purchase</td>
              </tr>
              <tr>
                <td class="p-2 border">Competitive Wholesale Rate</td>
                <td class="p-2 border">Healthy margins even at competitive retail prices</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3>Comparison: Begam Gold vs. Others</h3>
        <ul>
          <li><strong>vs. Dust-Heavy Cheap Blends:</strong> Better taste (not just color) and no bitter aftertaste.</li>
          <li><strong>vs. Premium National Brands:</strong> Comparable color/strength at significantly better wholesale pricing.</li>
          <li><strong>vs. Generic CTC Blends:</strong> Superior color stability specifically for boiling methods.</li>
        </ul>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200 text-center">
        <p class="italic text-stone-600">"Begam Gold isn't just tea. It's your competitive advantage packaged in every pouch."</p>
        <div class="mt-8 flex flex-col md:flex-row justify-between gap-8 text-sm text-left">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> High Volume In Stock</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 3-7 business days</li>
              <li class="flex gap-2"><span>💳</span> <strong>Payment:</strong> Advance / Credit</li>
            </ul>
          </div>
          <div class="flex-1 text-center self-center">
             <span class="text-[10px] text-stone-400 uppercase tracking-widest">
              Last Updated: January 2026 | Color Grade #BLEND-BEG-001
            </span>
          </div>
        </div>
      </section>
    `,
    priceRange: "Contact for Wholesale Price",
    imageUrl: "/images/products/jjj.webp",
    imageAlt: "Begam Gold Strong Liquor Tea Wholesale - Manish Tea Traders Siliguri",
    sku: "BLEND-BEG-001",
    moq: "500 kg",
    stockStatus: "In Stock",
    specifications: {
      "Type": "Strong CTC Blend",
      "Origin": "Dooars (Select Gardens)",
      "Liquor": "Deep Red-Brown",
      "Character": "Heat Stable / Color Rich",
      "Packaging": "3kg PET Jar / Bulk Bags",
      "MOQ": "500 kg"
    }
  },
  {
    id: "p4",
    name: "Saavan Tea",
    slug: "saavan-tea",
    category: "CTC",
    description: "Premium monsoon harvest tea with distinctive zest & briskness. Bulk-only supply (500kg minimum) for serious distributors and exporters.",
    longDescription: `
      <section>
        <p><strong>Saavan Tea</strong> is our premium monsoon harvest offering, crafted for distributors and bulk buyers who understand that seasonal character and authentic freshness command loyalty in discerning tea markets. In regions where consumers appreciate the lighter, more nuanced side of tea, Saavan delivers an experience that heavy, muddy blends simply cannot match.</p>
      </section>

      <section>
        <h3>The Monsoon Advantage</h3>
        <p>Harvested exclusively during the peak monsoon months when rainfall and humidity create optimal growing conditions, Saavan Tea captures nature's most vibrant flush. The tea bushes, rejuvenated by consistent rains, produce leaves with:</p>
        <ul>
          <li><strong>Enhanced Chlorophyll Content</strong> - Creates that distinctive grassy freshness</li>
          <li><strong>Lower Tannin Levels</strong> - Results in a lighter, less astringent cup</li>
          <li><strong>Rapid Growth Cycle</strong> - Ensures younger, more tender leaves with delicate flavor profiles</li>
        </ul>
        <p>This isn't just seasonal tea—it's the expression of what monsoon terroir brings to the cup.</p>
      </section>

      <section>
        <h3>Distinctive Flavor Profile</h3>
        <h4>The 'Zest & Briskness' Character</h4>
        <ul>
          <li><strong>Refreshing Grassy Notes</strong> - A clean, vegetal brightness that energizes</li>
          <li><strong>Light-Bodied Elegance</strong> - No heaviness or muddy undertones</li>
          <li><strong>Natural Briskness</strong> - A lively, crisp finish without bitterness</li>
          <li><strong>Clean Liquor</strong> - Bright, clear infusion that looks as fresh as it tastes</li>
          <li><strong>Morning & Afternoon Versatility</strong> - Perfect for lighter consumption moments</li>
        </ul>
      </section>

      <section>
        <h3>Visual Quality Markers</h3>
        <p><strong>What Your Customers Will Notice:</strong></p>
        <p>Our processing standards ensure every 500g pack delivers visual excellence:</p>
        <ul>
          <li>Clean, uniform black granules with consistent particle size</li>
          <li>No dust, no stems, no foreign matter</li>
          <li>Even color distribution indicating proper oxidation</li>
          <li>Premium appearance that justifies higher retail positioning</li>
        </ul>
      </section>

      <section>
        <h3>Business Model: Bulk-Only Supply</h3>
        <p><strong>Minimum Order Quantity: 500 KG</strong></p>
        <p>Saavan Tea is positioned exclusively for serious bulk buyers—distributors, exporters, branded tea companies, and institutional suppliers who:</p>
        <ul>
          <li>Require consistent seasonal character across large volumes</li>
          <li>Serve markets preferring lighter, fresher tea styles</li>
          <li>Need reliable monsoon harvest supply for private labeling</li>
          <li>Value authentic harvest identity over generic blends</li>
        </ul>
        
        <h4>Why 500 KG Minimum?</h4>
        <p>This threshold ensures:</p>
        <ul>
          <li>Price efficiency for bulk operations</li>
          <li>Seasonal batch consistency</li>
          <li>Serious buyer commitment</li>
          <li>Reduced logistics complexity</li>
        </ul>
      </section>

      <section>
        <h3>Packaging Specifications</h3>
        <h4>500 Gram Retail-Ready Units</h4>
        <p>Each case contains individually packed 500g units in durable plastic packaging:</p>
        <ul>
          <li><strong>Material:</strong> Food-grade plastic for moisture barrier protection</li>
          <li><strong>Sealing:</strong> Heat-sealed for tamper evidence and freshness lock</li>
          <li><strong>Shelf Life:</strong> 18 months from packaging date when stored properly</li>
          <li><strong>Labeling:</strong> Customizable for private label requirements</li>
          <li><strong>Case Quantity:</strong> Contact for bulk case configuration</li>
        </ul>
        
        <p><strong>Perfect for:</strong></p>
        <ul>
          <li>Private label tea brands targeting premium segments</li>
          <li>Export markets preferring lighter Indian teas</li>
          <li>Specialty tea retailers and cafés</li>
          <li>Corporate gifting and hamper companies</li>
          <li>Tea blenders seeking monsoon character components</li>
        </ul>
      </section>

      <section>
        <h3>Quality Control Protocol</h3>
        <p>Every production batch undergoes our 5-point verification:</p>
        <ol>
          <li><strong>Visual Sorting</strong> - Manual inspection for color uniformity and cleanliness</li>
          <li><strong>Grading Verification</strong> - Particle size consistency check</li>
          <li><strong>Liquor Analysis</strong> - Color, brightness, and clarity assessment</li>
          <li><strong>Sensory Evaluation</strong> - Professional tasting for characteristic zest and briskness</li>
          <li><strong>Packaging Integrity</strong> - Seal quality and weight verification</li>
        </ol>
      </section>

      <section>
        <h3>Target Market Segments</h3>
        <p><strong>Ideal Buyer Profiles:</strong></p>
        <p>Tea Exporters • Private Label Brands • Specialty Tea Retailers • Hotel & Restaurant Chains • Corporate Bulk Buyers • Tea Blending Houses • E-commerce Tea Brands • International Distributors</p>
      </section>

      <section>
        <h3>Seasonal Availability</h3>
        <p>Saavan Tea represents our monsoon harvest period production. Given the seasonal nature:</p>
        <ul>
          <li><strong>Peak Availability:</strong> July - October</li>
          <li><strong>Limited Production Window:</strong> Weather-dependent harvest</li>
          <li><strong>Annual Volume:</strong> Contact for current season allocation</li>
          <li><strong>Pre-booking:</strong> Recommended for guaranteed supply</li>
        </ul>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> Seasonal - Contact for Current Availability</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 5-10 business days (minimum 500 kg order)</li>
              <li class="flex gap-2"><span>💳</span> <strong>Payment:</strong> Advance payment for first-time buyers / Credit terms for verified accounts</li>
              <li class="flex gap-2"><span>📍</span> <strong>Shipping:</strong> Pan-India; export inquiries welcome</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Target Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Tea Exporters • Private Label Brands • Specialty Retailers • Hotel Chains • Corporate Buyers • Blending Houses • E-commerce Brands
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | Product Code: #SEAS-SAV-M500
        </div>
      </section>
    `,
    priceRange: "Contact for Wholesale Price",
    imageUrl: "/images/products/savaan_tea.webp",
    imageAlt: "Saavan Monsoon Flush CTC Tea Bulk Wholesale Supplier - Manish Tea Traders Siliguri",
    badge: "Seasonal",
    sku: "SEAS-SAV-M500",
    moq: "500 kg",
    stockStatus: "Seasonal",
    specifications: {
      "Type": "Monsoon Flush CTC",
      "Season": "July - October",
      "Character": "Zest & Briskness",
      "Liquor": "Light-Bodied, Bright",
      "Packaging": "500g Retail-Ready Units",
      "MOQ": "500 kg (Bulk Only)"
    }
  },
  {
    id: "p5",
    name: "Priya Gold",
    slug: "priya-gold",
    category: "Blend",
    description: "The Economics of Every Cup. Precision-engineered for high-volume commercial tea service with maximum extraction.",
    longDescription: `
      <section>
        <p>In commercial tea service, the math is simple: cups per kilogram determines profitability. Whether you're running a roadside tea stall serving hundreds of customers daily, managing a factory canteen, or supplying corporate pantries, every gram counts. <strong>Priya Gold</strong> is precision-engineered for exactly this reality—maximum extraction, minimum waste, consistent results, and a price point that keeps your margins healthy.</p>
        <p>This isn't a blend designed for retail shelves or premium positioning. Priya Gold is the workhorse blend created specifically for high-volume, cost-sensitive commercial applications where performance per rupee is the only metric that matters.</p>
      </section>

      <section>
        <h3>The Extraction Advantage</h3>
        <p>Priya Gold uses a carefully calibrated mix of particle sizes designed for rapid, complete extraction:</p>
        <ul>
          <li><strong>Medium-Sized CTC Granules (65%):</strong> Provide body, flavor foundation, and that satisfying depth customers expect.</li>
          <li><strong>High-Strength Dust Grade (35%):</strong> Instant color development and rapid caffeine extraction for the "kick" factor.</li>
        </ul>
        <p>This dual-action formula means you extract more from every gram without needing to increase steeping time.</p>
      </section>

      <section>
        <h3>Performance Metrics That Matter</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Metric</th>
                <th class="p-2 border">Standard CTC</th>
                <th class="p-2 border">Priya Gold</th>
                <th class="p-2 border">Advantage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border font-bold">Cups per kg</td>
                <td class="p-2 border">120-140 cups</td>
                <td class="p-2 border text-green-700 font-bold">160-180 cups</td>
                <td class="p-2 border">+30-40 cups</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Color Dev.</td>
                <td class="p-2 border">3-5 minutes</td>
                <td class="p-2 border">1-2 minutes</td>
                <td class="p-2 border">Faster Service</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Cost per cup</td>
                <td class="p-2 border">₹2.50-3.00</td>
                <td class="p-2 border text-green-700 font-bold">₹1.80-2.20</td>
                <td class="p-2 border">Better Margins</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-[10px] text-stone-400 mt-2">*Based on standard brewing ratios and wholesale pricing. Actual results may vary.</p>
      </section>

      <section>
        <h3>The "Kick" Factor: Caffeine & Satisfaction</h3>
        <p>Commercial tea drinkers—truck drivers, factory workers, office employees—want energy and alertness. Priya Gold delivers:</p>
        <ul>
          <li><strong>High Caffeine Release:</strong> Dust particles release caffeine faster and more completely.</li>
          <li><strong>Strong Mouthfeel:</strong> Tannin levels calibrated for "substance" without excessive bitterness.</li>
          <li><strong>Immediate Impact:</strong> Quick extraction means the energizing effect kicks in faster.</li>
        </ul>
      </section>

      <section>
        <h3>Target Commercial Segments</h3>
        <dl>
          <dt><strong>Tea Stalls & Roadside Chaiwalas</strong></dt>
          <dd>Brew time under 2 minutes fits service speed; strong color impresses customers immediately.</dd>
          
          <dt><strong>Factory & Industrial Canteens</strong></dt>
          <dd>Ideal for bulk preparation of 50-100 cup batches where workers appreciate the strong "wake-up" effect.</dd>
          
          <dt><strong>Catering & Event Management</strong></dt>
          <dd>Scales without quality loss, allowing for competitive quote pricing on tight margins.</dd>

          <dt><strong>Small Restaurants & Dhabas</strong></dt>
          <dd>Low per-cup cost makes complimentary chai service viable during rush hours.</dd>
        </dl>
      </section>

      <section>
        <h3>Why Priya Gold Outperforms Alternatives</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Comparison</th>
                <th class="p-2 border">Priya Gold Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border font-bold">vs. Pure Dust Blends</td>
                <td class="p-2 border">Cleaner cup, doesn't produce muddy taste or turn bitter.</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">vs. Standard Economy CTC</td>
                <td class="p-2 border">30-40% better extraction efficiency; faster brewing saves fuel.</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">vs. Premium Blends</td>
                <td class="p-2 border">Identical performance in milk-heavy prep without the unnecessary cost.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3>Commercial Reality Check</h3>
        <div class="bg-tea-50 p-4 rounded-xl border border-tea-100">
          <ul class="!list-none !pl-0 space-y-2 mb-0">
            <li class="flex gap-2"><span>✓</span> <strong>Is it strong enough?</strong> Yes</li>
            <li class="flex gap-2"><span>✓</span> <strong>Does it look like proper chai?</strong> Yes</li>
            <li class="flex gap-2"><span>✓</span> <strong>Does it give me energy?</strong> Yes</li>
            <li class="flex gap-2"><span>✓</span> <strong>Does it cost too much?</strong> No</li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Cost Efficiency Analysis</h3>
        <p><strong>Example: Mid-sized Tea Stall (200 cups/day)</strong></p>
        <ul>
          <li><strong>Using Standard CTC:</strong> Monthly tea cost approximately ₹6,750</li>
          <li><strong>Using Priya Gold:</strong> Monthly tea cost approximately ₹5,040</li>
          <li><strong>Annual Savings: ₹20,520</strong></li>
        </ul>
        <p><em>Savings that can fund better cups, improved sugar, or simply boost your profit margins.</em></p>
      </section>

      <section>
        <h3>Operational Advantages</h3>
        <ul>
          <li><strong>Speed of Service:</strong> Higher turnover during peak hours with reduced fuel consumption.</li>
          <li><strong>Consistency Across Shifts:</strong> Forgiving formulation works even if water temp or brew time varies slightly.</li>
          <li><strong>Inventory Management:</strong> Standard 3kg PET jar protects against moisture in busy kitchens.</li>
        </ul>
      </section>

      <section>
        <h3>Quality & Packaging</h3>
        <ul>
          <li><strong>Standards:</strong> Food-safe processing, moisture control, and lab-tested strength consistency.</li>
          <li><strong>3kg PET Jar:</strong> Volume efficiency (500+ cups), moisture protection, and easy stackable handling.</li>
        </ul>
      </section>

      <section>
        <h3>Business Benefits for Wholesalers</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Benefit</th>
                <th class="p-2 border">Commercial Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border font-bold">High Volume Potential</td>
                <td class="p-2 border">Commercial clients reorder frequently and in larger quantities.</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Lower Churn</td>
                <td class="p-2 border">Once established, these clients are extremely "sticky" and loyal.</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Predictable Demand</td>
                <td class="p-2 border">Commercial consumption is consistent year-round, regardless of season.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Supply Reliability</h4>
            <p class="text-stone-600 leading-relaxed mb-4">Commercial clients can't afford stockouts. We maintain substantial inventory of Priya Gold specifically to fuel your morning rush. Regular replenishment from garden-fresh batches ensures optimal shelf life.</p>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> Continuous Replenishment</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 2-5 business days</li>
              <li class="flex gap-2"><span>🫙</span> <strong>Standard Pack:</strong> 3kg Commercial Jar</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Target Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Tea Stalls • Industrial Canteens • Corporate Pantries • Catering • Roadside Dhabas • Event Managers
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | Industry Series #BLEND-PRI-001
        </div>
      </section>
    `,
    priceRange: "₹130 – ₹220 / kg",
    imageUrl: "/images/products/priya_gold.webp",
    imageAlt: "Priya Gold Economy Tea Blend Wholesale Price - Manish Tea Traders Siliguri",
    sku: "BLEND-PRI-001",
    moq: "500 kg",
    stockStatus: "In Stock",
    specifications: {
      "Category": "Commercial Economy",
      "Yield": "160-180 Cups / kg",
      "Extraction": "Rapid (1-2 mins)",
      "Particle Mix": "CTC + High-Strength Dust",
      "Best For": "High Volume Tea Service",
      "Packaging": "3kg PET Jar (Standard)",
      "MOQ": "500 kg"
    }
  },
  {
    id: "p6",
    name: "Sabnam Gold",
    slug: "sabnam-gold",
    category: "Blend",
    description: "The 'Hotel Special' blend. Balanced strength and golden liquor profile favored by mid-range restaurants and cafes.",
    longDescription: `
      <section>
        <p>In the restaurant and cafe business, tea is where reputation meets margins. Serve poor quality and customers notice—online reviews suffer, repeat visits decline. Over-invest in premium blends and profitability evaporates on a beverage many consider "complimentary." <strong>Sabnam Gold</strong> is engineered for this precise sweet spot—the blend that makes your tea service a quiet competitive advantage rather than a cost center or complaint generator.</p>
      </section>

      <section>
        <h3>The Hotel Special Philosophy</h3>
        <p>We call Sabnam Gold our 'Hotel Special' because it solves the unique challenge faced by mid-range restaurants, cafes, and hospitality businesses:</p>
        <ul>
          <li><strong>The Challenge:</strong> Your customers expect good tea—not artisanal, but good. The kind that complements their meal and doesn't trigger complaints.</li>
          <li><strong>The Solution:</strong> A blend that delivers consistent quality, pleasant flavor, attractive appearance, and rapid preparation—all while maintaining healthy F&B margins.</li>
        </ul>
      </section>

      <section>
        <h3>Why Mid-Range Hospitality Chooses Sabnam Gold</h3>
        
        <h4>1. The Visual Appeal Factor</h4>
        <p>In a restaurant or cafe, tea is often served in glass cups or white ceramic—your beverage is on display. Sabnam Gold produces that appealing <strong>golden-brown liquor</strong> that signals quality to customers before the first sip.</p>
        
        <h4>2. Smooth, Non-Bitter Profile</h4>
        <p>One of the biggest complaints about commercial hotel tea is harshness. Sabnam Gold's formulation specifically addresses this:</p>
        <ul>
          <li><strong>Controlled Tannin Levels:</strong> Strong enough to taste like proper tea, gentle enough to avoid bitterness.</li>
          <li><strong>Smooth Mouthfeel:</strong> Doesn't coat the mouth with unpleasant dryness.</li>
          <li><strong>No Burnt Notes:</strong> Even if accidentally over-brewed, doesn't turn harsh.</li>
          <li><strong>Milk Compatible:</strong> Works beautifully with varying milk quantities.</li>
        </ul>
        
        <h4>3. Rapid Color Release: Kitchen Efficiency</h4>
        <p>Sabnam Gold features a higher percentage of fine fannings that deliver critical operational benefits:</p>
        <ul>
          <li><strong>Faster Brewing:</strong> Color develops within 60-90 seconds, reducing wait times during service rush.</li>
          <li><strong>Fuel Savings:</strong> Less boiling time = lower gas/electricity consumption across hundreds of daily cups.</li>
          <li><strong>Labor Efficiency:</strong> More forgiving if attention shifts to other tasks; consistent results with minimal supervision.</li>
        </ul>
      </section>

      <section>
        <h3>Target Hospitality Segments</h3>
        <dl>
          <dt><strong>Mid-Range Restaurants (₹300-800 per person)</strong></dt>
          <dd>Perfect for complimentary after-meal chai service. Enhances dining experience, encourages lingering, and generates positive review mentions.</dd>
          
          <dt><strong>Cafes & Coffee Shops</strong></dt>
          <dd>Tea menu alternative that respects tea drinkers. Quick preparation, no specialized training needed, attractive in cafe-style glassware.</dd>
          
          <dt><strong>Business Hotels & Conference Centers</strong></dt>
          <dd>Banquet service and meeting room refreshments. Scalable for 20-200 people, performs well in commercial tea urns.</dd>
          
          <dt><strong>Guest Houses & Boutique Properties</strong></dt>
          <dd>In-room tea service that elevates perceived property value. Works for international guests with its smooth, non-aggressive profile.</dd>
          
          <dt><strong>Cloud Kitchens & Food Delivery</strong></dt>
          <dd>Bundled beverages that travel well. Flavor stability during delivery, reheats acceptably, maintains quality during transit.</dd>
        </dl>
      </section>

      <section>
        <h3>Technical Specifications</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <tbody>
              <tr>
                <td class="p-2 border font-bold">Primary Grade</td>
                <td class="p-2 border">Fine Fannings (65%), Medium CTC (35%)</td>
              </tr>
              <tr>
                <td class="p-2 border">Liquor Color</td>
                <td class="p-2 border">Golden-Brown, Clear</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Flavor Profile</td>
                <td class="p-2 border">Smooth, Balanced, Non-Bitter</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Brew Time</td>
                <td class="p-2 border">60-90 seconds (rapid extraction)</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Milk Compatibility</td>
                <td class="p-2 border">Excellent (1:3 to 1:5 ratios)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3>The "Between Premium and Commercial" Positioning</h3>
        <div class="bg-tea-50 p-4 rounded-xl border border-tea-100 mb-4">
          <p class="font-bold mb-2">What Sabnam Gold IS:</p>
          <ul class="!list-none !pl-0 space-y-2 mb-0">
            <li class="flex gap-2"><span>✓</span> The Quality Baseline for Customer-Facing Service</li>
            <li class="flex gap-2"><span>✓</span> The Operational Sweet Spot (fast + good)</li>
            <li class="flex gap-2"><span>✓</span> The Margin Optimizer (allows free service)</li>
            <li class="flex gap-2"><span>✓</span> The Reputation Protector (no complaints)</li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Cost Analysis: Mid-Range Restaurant Scenario</h3>
        <p><strong>100 customers/day, 60% take tea</strong></p>
        <ul>
          <li><strong>Daily consumption:</strong> 400-450 grams</li>
          <li><strong>Cost per cup:</strong> ₹1.80-2.10 (including milk, sugar, fuel)</li>
          <li><strong>Monthly tea cost:</strong> ₹3,600-4,200</li>
        </ul>
        <p><strong>vs. Premium Blend:</strong> Saves ₹2,400-3,000/month with no noticeable quality difference for most diners.</p>
        <p><strong>vs. Economy Blend:</strong> Invests ₹1,500-1,800 more/month but eliminates bitter taste complaints and protects brand reputation.</p>
      </section>

      <section>
        <h3>The Smoothness Advantage</h3>
        <p>Many commercial hotel blends use high-dust compositions that extract quickly but create unpleasant astringency. Sabnam Gold uses <strong>fine fannings rather than dust</strong>—a critical distinction:</p>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Fine Fannings (Sabnam Gold)</th>
                <th class="p-2 border">Dust-Heavy Blends</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border">Rapid extraction without over-extraction</td>
                <td class="p-2 border">Over-extracts easily, producing bitterness</td>
              </tr>
              <tr>
                <td class="p-2 border">Clean cup with minimal sediment</td>
                <td class="p-2 border">Muddy appearance with sediment</td>
              </tr>
              <tr>
                <td class="p-2 border">Maintains smoothness even with extended contact</td>
                <td class="p-2 border">Harsh mouthfeel, drying sensation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3>Brewing Versatility</h3>
        <ul>
          <li><strong>Traditional Boiling:</strong> 60-90 second steep, add milk, brief boil. Result: smooth, golden-brown, aromatic.</li>
          <li><strong>Tea Urn/Bulk Preparation:</strong> Maintains quality for 30-45 minutes, doesn't turn bitter sitting in urn.</li>
          <li><strong>Individual Cup Service:</strong> Portion into strainers, 90-second steep adequate, professional presentation.</li>
          <li><strong>Automated Dispensers:</strong> Compatible with modern commercial machines, consistent batch-to-batch results.</li>
        </ul>
      </section>

      <section>
        <h3>Quality Assurance & Packaging</h3>
        <ul>
          <li><strong>Testing:</strong> Flavor consistency, bitterness threshold, color development speed, milk interaction, sediment control.</li>
          <li><strong>Food Safety:</strong> Processed in food-grade facilities, regular microbial testing, moisture control, batch traceability.</li>
          <li><strong>3kg PET Jar:</strong> Freshness protection, stackable storage, portion control, serves 450-600 cups (1.5-2 weeks for average cafe).</li>
        </ul>
      </section>

      <section>
        <h3>Business Benefits for Distributors</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Advantage</th>
                <th class="p-2 border">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border font-bold">Steady Repeat Orders</td>
                <td class="p-2 border">Restaurants don't switch tea frequently once satisfied</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Referral Potential</td>
                <td class="p-2 border">Chefs and managers recommend to industry peers</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Low Complaint Rate</td>
                <td class="p-2 border">Smooth profile means fewer service issues</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">Year-Round Demand</td>
                <td class="p-2 border">Restaurants serve tea consistently, not seasonally</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Hospitality Expertise</h4>
            <p class="text-stone-600 leading-relaxed mb-4">We supply numerous restaurants, cafes, and hotels across North India. Sabnam Gold represents our accumulated knowledge of what works in real kitchens serving real customers—practical excellence at sustainable pricing.</p>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> Regular Inventory</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 3-7 business days</li>
              <li class="flex gap-2"><span>🫙</span> <strong>Packaging:</strong> 3kg PET Jar (Hospitality Standard)</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Market Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Mid-Range Hotels • Casual Dining • Office Pantries • High-End Tea Stalls • Banquet Halls • Cafes • Cloud Kitchens
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | Hospitality Series #BLEND-SAB-001
        </div>
      </section>
    `,
    priceRange: "Contact for Wholesale Price",
    imageUrl: "/images/products/kk2.webp",
    imageAlt: "Sabnam Gold Hotel Special Tea Wholesale Supplier - Manish Tea Traders Siliguri",
    sku: "BLEND-SAB-001",
    moq: "300 kg",
    stockStatus: "In Stock",
    specifications: {
      "Type": "Hotel Special Blend",
      "Color": "Golden Brown",
      "Strength": "Medium-Strong",
      "Packaging": "Loose / Bulk Sacks",
      "Best For": "Restaurants / Cafes",
      "MOQ": "300 kg"
    }
  },
  {
    id: "p7",
    name: "Nepal High Grown",
    slug: "nepal-high-grown",
    category: "Orthodox",
    description: "Premium Whole Leaf Tea | Ilam Estate Origin. Darjeeling-quality at Nepal pricing. Floral, fruity, muscatel notes.",
    longDescription: `
      <section>
        <h3>The Best-Kept Secret in the Tea World</h3>
        <p>Manish Tea Traders proudly presents <strong>Nepal High Grown</strong>, sourced from the misty, high-altitude slopes of Ilam in Eastern Nepal—a region that shares the same geographical DNA, soil composition, and climatic conditions as the legendary Darjeeling tea gardens. This is premium quality at a fraction of the Darjeeling price point, offering your customers exceptional value without compromise.</p>
      </section>

      <section>
        <h3>Why Nepal High Grown Is a Game-Changer for Retailers</h3>
        <p>In a market saturated with CTC dust and standard blends, Nepal High Grown gives you a competitive edge. It's the perfect answer for customers who are evolving beyond 'strength-first' tea and seeking sophistication, aroma, and character in their cup.</p>
        <ul>
          <li><strong>Visual Appeal:</strong> Twisted, wiry whole leaves that look premium and signal quality before the first brew.</li>
          <li><strong>Pale Amber Liquor:</strong> Brews into a delicate, golden-amber infusion that's visually distinct and elegant.</li>
          <li><strong>Aromatic Complexity:</strong> Distinct floral and fruity notes—think muscatel grapes, orchid blossoms, and a hint of stone fruit. This is tea that announces itself before it reaches the lips.</li>
          <li><strong>Self-Drinking Excellence:</strong> Drinks beautifully without milk, sugar, or spices. Perfect for the growing segment of health-conscious and flavor-focused tea drinkers.</li>
        </ul>
      </section>

      <section>
        <h3>The Power of Perception Meets Price</h3>
        <p>Your customers get Darjeeling-adjacent quality at Nepal pricing. This positioning allows you to:</p>
        <ul>
          <li>Introduce a "Premium Leaf Tea" category without alienating price-sensitive buyers</li>
          <li>Attract aspirational customers seeking refined taste experiences</li>
          <li>Build higher margins on a product that feels exclusive but remains accessible</li>
          <li>Differentiate your offering from competitors selling only commodity-grade tea</li>
        </ul>
      </section>

      <section>
        <h3>Who Is This For?</h3>
        <dl>
          <dt><strong>Specialty Tea Retailers & Organic Stores</strong></dt>
          <dd>Perfect for shops targeting wellness-conscious consumers and tea connoisseurs looking for the next discovery.</dd>
          
          <dt><strong>Cafés & Boutique Hotels</strong></dt>
          <dd>An excellent addition to premium tea menus. Pairs beautifully with light meals, desserts, and afternoon tea service.</dd>
          
          <dt><strong>Online Tea Sellers & Subscription Box Curators</strong></dt>
          <dd>A story-rich product with exotic origin appeal and genuine quality credentials.</dd>
          
          <dt><strong>Corporate Gifting & Hamper Businesses</strong></dt>
          <dd>Elevated presentation, unique origin story, and sophisticated taste profile make it ideal for premium gift packaging.</dd>
        </dl>
      </section>

      <section>
        <h3>Brewing Recommendations</h3>
        <ul>
          <li><strong>Quantity:</strong> 2-3 grams per 150ml cup (approx. 1 teaspoon)</li>
          <li><strong>Water Temperature:</strong> 85-90°C (just below boiling)</li>
          <li><strong>Steeping Time:</strong> 3-4 minutes for first infusion</li>
          <li><strong>Re-steeping:</strong> Can be steeped 2-3 times with excellent results</li>
        </ul>
        <p><em>Best enjoyed without milk to fully appreciate the delicate floral and fruity character. Minimal or no sugar recommended.</em></p>
      </section>

      <section>
        <h3>Product Specifications</h3>
        <ul>
          <li><strong>Origin:</strong> Ilam Valley, Eastern Nepal (1,500–2,200m altitude)</li>
          <li><strong>Grade:</strong> High Grown Whole Leaf</li>
          <li><strong>Processing:</strong> Orthodox method (twisted leaf)</li>
          <li><strong>Flavor Profile:</strong> Floral, fruity, muscatel notes with bright finish</li>
          <li><strong>Packaging:</strong> Available in 500g, 1kg, 5kg options (customizable)</li>
          <li><strong>Shelf Life:</strong> 12-18 months when stored in airtight containers</li>
        </ul>
        
        <h4>Storage Recommendations</h4>
        <p>Store in a cool, dry place away from direct sunlight and strong odors. Use airtight containers to preserve aroma and freshness.</p>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> Limited Seasonal Availability</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 2-5 business days</li>
              <li class="flex gap-2"><span>💳</span> <strong>Payment:</strong> Cash / UPI / Digital</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Target Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Specialty Tea Retailers • Premium Cafés • Health & Wellness Stores • Online Tea Merchants • Boutique Hotels • Gift Hamper Businesses • Tea Subscription Services
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Manish Tea Traders, Siliguri - Gateway to Himalayan Tea Excellence<br/>
          Last Updated: January 2026 | Premium Leaf Series #NEP-HG-001
        </div>
      </section>
    `,
    priceRange: "₹350 – ₹600 / kg",
    imageUrl: "/images/products/nepal.webp",
    imageAlt: "Nepal High Grown Orthodox Whole Leaf Tea Ilam Estate Wholesale - Manish Tea Traders Siliguri",
    sku: "NEP-HG-001",
    moq: "100 kg",
    stockStatus: "In Stock",
    specifications: {
      "Origin": "Ilam Valley, Nepal (1,500-2,200m)",
      "Type": "Orthodox Whole Leaf",
      "Grade": "High Grown",
      "Flavor": "Floral, Fruity, Muscatel",
      "Processing": "Orthodox (Twisted Leaf)",
      "MOQ": "100 kg"
    }
  },
  {
    id: "p8",
    name: "Tea Dust (Hotel Special)",
    slug: "tea-dust-hotel-special",
    category: "Dust",
    description: "Primary Dust Grade | Raw power for high-volume chai service. Maximum extraction, instant color, uncompromising strength.",
    longDescription: `
      <section>
        <p>This is raw power in a cup. Our <strong>Hotel Special Dust</strong> is not 'leftover' powder—it is premium <strong>Primary Dust (PD)</strong> graded tea designed for maximum extraction and uncompromising strength. Engineered for the high-volume 'Chai' service industry where speed, consistency, and bold flavor are non-negotiable, this is the choice of professionals serving hundreds of cups an hour without losing liquor quality.</p>
      </section>

      <section>
        <h3>The Power of Instant Infusion</h3>
        <p>Upon contact with boiling water, this tea explodes with color and strength. Because the particle size is extremely fine, the surface area for extraction is maximized—delivering full-bodied flavor the moment water hits the leaves.</p>
        <ul>
          <li><strong>Instant Color:</strong> Deep, reddish-brown liquor within seconds that signals quality at first glance.</li>
          <li><strong>Cuts Through Everything:</strong> Specifically curated to hold its strength through the thickest milk and strongest ginger/cardamom spices—the tea taste is never lost.</li>
          <li><strong>Highest Yield:</strong> Delivers the maximum number of cups per kilogram of any product in our range.</li>
          <li><strong>Cost Effective:</strong> The most economical way to serve quality tea at scale without compromise.</li>
        </ul>
      </section>

      <section>
        <h3>B2B Efficiency</h3>
        <dl>
          <dt><strong>Roadside Tea Stalls</strong></dt>
          <dd>The favorite for 'Kadak Chai'. Holds its strength perfectly even with high milk-to-water ratios. Built for the daily grind where consistency equals reputation.</dd>
          
          <dt><strong>Railway & Bus Canteens</strong></dt>
          <dd>Excellent for quick-serving environments where customers demand instant satisfaction and strong flavor.</dd>
          
          <dt><strong>Catering Services & Industrial Units</strong></dt>
          <dd>Ideal for large events, weddings, factory canteens, and industrial mass-brewing where volume meets quality.</dd>
        </dl>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> Always In Stock</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 2-5 business days across Siliguri and surrounding regions</li>
              <li class="flex gap-2"><span>💳</span> <strong>Payment:</strong> Cash / UPI / Digital</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Target Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Street Vendors • Railway Canteens • Highway Dhabas • Catering Groups • Low-Cost Eateries • Industrial Canteens • Mess Kitchens
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Manish Tea Traders, Siliguri - Delivering Strength, Cup After Cup<br/>
          Last Updated: January 2026 | Commercial Series #CTC-DST-001
        </div>
      </section>
    `,
    priceRange: "₹120 – ₹190 / kg",
    imageUrl: "/images/products/dooars_tea_dust_user.webp",
    imageAlt: "Primary Dust Grade Tea Hotel Special Wholesale - Manish Tea Traders Siliguri",
    sku: "CTC-DST-001",
    moq: "500 kg",
    stockStatus: "In Stock",
    specifications: {
      "Type": "Primary Dust (PD) Grade",
      "Infusion": "Instant / Maximum Strength",
      "Color": "Deep Reddish Brown",
      "Yield": "Highest Cups per Kg",
      "Best For": "High-Volume Chai Service",
      "MOQ": "500 kg"
    }
  },
  {
    id: "p9",
    name: "Darjeeling Orthodox",
    slug: "darjeeling-orthodox",
    category: "Orthodox",
    description: "The 'Champagne of Teas'. Authentic GI-tagged Darjeeling tea for export and premium retail.",
    longDescription: `
      <section>
        <p><strong>Manish Tea Traders</strong> offers authentic GI-tagged Darjeeling tea, celebrated worldwide as the "Champagne of Teas". Sourced from the legendary estates of the Darjeeling district, our orthodox selection represents the pinnacle of tea craftsmanship.</p>
      </section>

      <section>
        <h3>Available Flushes</h3>
        <ul>
          <li><strong>First Flush (Spring):</strong> Light, floral, and delicate. Known for its greenish leaf and unique astringency.</li>
          <li><strong>Second Flush (Summer):</strong> The "Muscatel" character. Full-bodied, amber liquor with distinct fruity notes.</li>
          <li><strong>Autumn Flush:</strong> Smooth, round, and coppery. Excellent for self-drinking.</li>
        </ul>
      </section>

      <section>
        <h3>Why Source Darjeeling from Siliguri?</h3>
        <p>Siliguri is the geographic and logistical gateway to Darjeeling. By sourcing from us, you get:</p>
        <ul>
          <li><strong>Freshness:</strong> Tea reaches our warehouse within hours of leaving the estate factory.</li>
          <li><strong>Authenticity:</strong> Direct relationships with garden managers ensure 100% genuine origin.</li>
          <li><strong>Price Advantage:</strong> Minimal transit costs compared to purchasing from Kolkata or Delhi.</li>
        </ul>
      </section>

      <section>
        <h3>Ideal For</h3>
        <ul>
          <li><strong>Export Markets:</strong> Europe, Japan, USA, and Middle East.</li>
          <li><strong>Premium Tea Lounges:</strong> High-ticket items for discerning customers.</li>
          <li><strong>Gifting Sector:</strong> Developing premium gift boxes and corporate hampers.</li>
        </ul>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> Seasonal Availability</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> Worldwide Shipping Available</li>
              <li class="flex gap-2"><span>📜</span> <strong>Certifications:</strong> GI Tag, Organic (on request)</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Target Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Exporters • High-End Retailers • Boutique Tea Shops • Corporate Gifting
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | Estate Series #DAR-ORT-001
        </div>
      </section>
    `,
    priceRange: "₹800 – ₹5,000 / kg",
    imageUrl: "/images/products/orthodox.webp",
    imageAlt: "Authentic Darjeeling Orthodox Tea Wholesale Supplier - Manish Tea Traders Siliguri",
    badge: "Premium",
    sku: "DAR-ORT-001",
    moq: "50 kg",
    stockStatus: "In Stock",
    specifications: {
      "Origin": "Darjeeling District",
      "Type": "Orthodox Whole Leaf",
      "Grade": "FTGFOP1 / TGBOP",
      "Flush": "First / Second / Autumn",
      "Certification": "GI Tag Available",
      "MOQ": "50 kg"
    }
  },
  {
    id: "p10",
    name: "Premium Assam CTC Tea - All Grades",
    slug: "premium-assam-ctc-tea",
    category: "CTC",
    description: "Strong, malty, and full-bodied CTC tea from Upper Assam. The gold standard for milk tea.",
    longDescription: `
      <section>
        <p><strong>Premium Assam CTC</strong> is the backbone of the Indian tea industry. Known for its rich, malty flavor and deep ruby-red liquor, this tea is purpose-built to be enjoyed with milk and sugar.</p>
      </section>

      <section>
        <h3>Flavor Profile</h3>
        <p>Unlike Dooars tea which is lighter, Upper Assam CTC offers:</p>
        <ul>
          <li><strong>Maltiness:</strong> A distinct, biscuit-like sweet aroma.</li>
          <li><strong>Body:</strong> Thick, creamy mouthfeel.</li>
          <li><strong>Strength:</strong> A robust cup that wakes you up.</li>
        </ul>
      </section>

      <section>
        <h3>Available Grades</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-stone-50">
              <tr>
                <th class="p-2 border">Grade</th>
                <th class="p-2 border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-2 border font-bold">BP (Broken Pekoe)</td>
                <td class="p-2 border">The primary grade. Large granule, balanced flavor.</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">BOP (Broken Orange Pekoe)</td>
                <td class="p-2 border">Slightly smaller, widely used in household packs.</td>
              </tr>
              <tr>
                <td class="p-2 border font-bold">BOP SM</td>
                <td class="p-2 border">Superior medium grade, excellent color.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3>Why Choose Our Assam CTC?</h3>
        <ul>
          <li><strong>Second Flush Focus:</strong> We prioritize sourcing from the summer harvest (May-June) which produces the strongest and most quality-rich tea.</li>
          <li><strong>Vacuum Storage:</strong> Stocks are kept in controlled environments to prevent moisture absorption.</li>
        </ul>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> In Stock</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> Pan-India</li>
              <li class="flex gap-2"><span>💳</span> <strong>Payment:</strong> Advance / Credit</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Target Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Packers • Blenders • Wholesalers • Premium Hotels
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | Origin Series #ASM-CTC-001
        </div>
      </section>
    `,
    priceRange: "₹220 – ₹450 / kg",
    imageUrl: "/images/products/assam.webp",
    imageAlt: "Premium Assam CTC Tea Wholesale Supplier - Manish Tea Traders Siliguri",
    sku: "ASM-CTC-001",
    moq: "500 kg",
    stockStatus: "In Stock",
    specifications: {
      "Origin": "Upper Assam",
      "Type": "CTC Granules",
      "Grade": "BP / BOP / BOPSM",
      "Flavor": "Strong, Malty",
      "Best For": "Milk Tea / Chai",
      "MOQ": "500 kg"
    }
  },
  {
    id: "p11",
    name: "Private Label Packaging",
    slug: "private-label-tea",
    category: "Packaging",
    description: "Launch your own tea brand. End-to-end solution: Sourcing + Blending + Packaging.",
    longDescription: `
      <section>
        <p><strong>Manish Tea Traders</strong> enables entrepreneurs to launch their own tea brands without the heavy investment of setting up a factory. Our private label service covers everything from the leaf to the final sealed packet.</p>
      </section>

      <section>
        <h3>How It Works</h3>
        <ol>
          <li><strong>Blend Selection:</strong> Choose from our existing best-sellers or create a custom blend exclusive to your brand.</li>
          <li><strong>Packaging Design:</strong> We assist with pouch design, sourcing printing cylinders, and regulatory compliance (FSSAI basics).</li>
          <li><strong>Production:</strong> We handle blending, weighing, filling, and sealing.</li>
          <li><strong>Delivery:</strong> Finished goods delivered to your warehouse, ready for retail.</li>
        </ol>
      </section>

      <section>
        <h3>Packaging Options</h3>
        <ul>
          <li><strong>Laminated Pouches:</strong> 50g, 100g, 250g, 500g, 1kg.</li>
          <li><strong>Box Packing:</strong> Inner foil + Outer carton.</li>
          <li><strong>PET Jars:</strong> 3kg bulk jars (popular for commercial supply brands).</li>
          <li><strong>Sample Sachets:</strong> 10g - 20g promotional packs.</li>
        </ul>
      </section>

      <section>
        <h3>Why Partner With Us?</h3>
        <ul>
          <li><strong>Low MOQs:</strong> Start with as little as 1000 kg per SKU (industry standard is often 5-10 tons).</li>
          <li><strong>Quality Consistency:</strong> Your brand's reputation is safe with our consistent blending standards.</li>
          <li><strong>Industry Guidance:</strong> We advise on pricing strategies and market trends.</li>
        </ul>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Service Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>🏭</span> <strong>Capacity:</strong> 5 Tons / Day</li>
              <li class="flex gap-2"><span>🎨</span> <strong>Design Support:</strong> Available</li>
              <li class="flex gap-2"><span>🛡️</span> <strong>Compliance:</strong> FSSAI Standards</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Target Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Startups • Supermarket Chains • Distributors • Corporate Brands
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | Service Series #SVC-PLB-001
        </div>
      </section>
    `,
    priceRange: "Service Charge + Material Cost",
    imageUrl: "/images/products/private_label.webp",
    imageAlt: "Private Label Tea Packaging Service - Manish Tea Traders Siliguri",
    sku: "SVC-PLB-001",
    moq: "1000 kg",
    stockStatus: "Service",
    specifications: {
      "Service": "End-to-End Private Labeling",
      "Packet Sizes": "50g to 1kg",
      "Material": "Poly / Met-PET / Box",
      "Min Volume": "1000 kg per SKU",
      "Turnaround": "15-20 Days (after material receipt)"
    }
  },
  {
    id: "p12",
    name: "Tea Bags (Bulk)",
    slug: "tea-bags-bulk",
    category: "Tea Bags",
    description: "Wholesale supply of dip tea bags. Double chamber with knotted string. Customized branding available.",
    longDescription: `
      <section>
        <p>For hotels, offices, and institutions requiring convenience, we supply high-quality tea bags in bulk. Available in staple-free, knotted, Double Chamber format for superior infusion.</p>
      </section>

      <section>
        <h3>Product Features</h3>
        <ul>
          <li><strong>Filter Paper:</strong> High porosity paper sourced from top global suppliers ensures excellent infusion without papery taste.</li>
          <li><strong>Double Chamber:</strong> The twin-chamber design allows water to circulate on four sides, providing faster and stronger brewing than single chamber bags.</li>
          <li><strong>Staple-Free:</strong> Food-safe knotted technology (no metal staples).</li>
        </ul>
      </section>

      <section>
        <h3>Customization</h3>
        <ul>
          <li><strong>Tag Branding:</strong> Your logo on the tag (MOQ 100,000 pieces).</li>
          <li><strong>Envelopes:</strong> Individually paper/foil crimped envelopes for hygiene and freshness.</li>
          <li><strong>Tea Selection:</strong> Fill with Assam CTC, Darjeeling, Green Tea, or Masala Chai.</li>
        </ul>
      </section>

      <section class="mt-12 pt-8 border-t border-stone-200">
        <div class="flex flex-col md:flex-row justify-between gap-8 text-sm">
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Logistic Details</h4>
            <ul class="space-y-2 !list-none !pl-0">
              <li class="flex gap-2"><span>📦</span> <strong>Stock:</strong> Made to Order</li>
              <li class="flex gap-2"><span>🚚</span> <strong>Delivery:</strong> 10-15 business days</li>
              <li class="flex gap-2"><span>🔢</span> <strong>MOQ:</strong> 5000 Pieces</li>
            </ul>
          </div>
          <div class="flex-1">
            <h4 class="text-stone-900 font-bold mb-3 uppercase tracking-wider text-xs">Target Segment</h4>
            <p class="text-stone-400 italic leading-relaxed">
              Hotels (In-Room) • Corporate Offices • Airlines • Catering
            </p>
          </div>
        </div>
        <div class="mt-8 pt-4 border-t border-stone-50 text-center text-[10px] text-stone-400 uppercase tracking-widest">
          Last Updated: January 2026 | Service Series #SVC-TBA-001
        </div>
      </section>
    `,
    priceRange: "₹0.80 – ₹2.50 / piece",
    imageUrl: "/images/products/tea_bags_bulk.webp",
    imageAlt: "Wholesale Tea Bags Supplier Double Chamber - Manish Tea Traders Siliguri",
    sku: "SVC-TBA-001",
    moq: "5000 Pieces",
    stockStatus: "Made to Order",
    specifications: {
      "Types": "Single Chamber / Double Chamber",
      "Material": "Non-Woven / Filter Paper",
      "Standard Fill": "2g per bag",
      "Tag": "Customizable with Logo",
      "Outer Envelope": "Optional (Foil/Paper)",
      "MOQ": "5000 Pieces"
    }
  },
];
