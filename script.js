document.addEventListener('DOMContentLoaded', function() {
    // Set the countdown timer (24 hours from now)
    const countdownDate = new Date();
    countdownDate.setHours(countdownDate.getHours() + 24);
    
    // Update the countdown every second
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        // Calculate hours, minutes, seconds
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
        // If the countdown is finished
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = "EXPIRED";
        }
    }, 1000);
    
    // Track affiliate link clicks
    const affiliateLink = document.getElementById('affiliate-link');
    affiliateLink.addEventListener('click', function(e) {
        // Here you would typically send tracking data to your analytics platform
        console.log('Affiliate link clicked - tracking this conversion');
        
        // In a real implementation, you might use:
        // fbq('track', 'Purchase');
        // or gtag('event', 'conversion', {...});
    });
    
    // Dynamic product data (could be fetched from an API in a real implementation)
    const productData = {
        title: "Premium Wireless Headphones",
        imageUrl: https://i.postimg.cc/gxY3gQpc/IMG-20250724-192852.jpg
        currentPrice: 99.99,
        discount: 50
    };
    
    // Update product info
    document.getElementById('product-title').textContent = productData.title;
    document.getElementById('product-img').src = productData.imageUrl;
    document.getElementById('product-img').alt = productData.title;
    document.querySelector('.original-price').textContent = $${productData.originalPrice.toFixed(2)};
    document.querySelector('.current-price').textContent = $${productData.currentPrice.toFixed(2)};
    document.querySelector('.discount-badge').textContent = ${productData.discount}% OFF;
    
    // Add animation to CTA button on page load
    setTimeout(() => {
        https://id.shp.ee/MU1f42C.transform = 'scale(1.05)';
        setTimeout(() => {
           https://id.shp.ee/MU1f42C.transform = 'scale(1)';
        }, 300);
    }, 1000);
});