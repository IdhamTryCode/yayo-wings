import { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
    canonical?: string;
}

export function SEO({
    title = 'Yayo Wings - Korean Wings Terenak di Demak | Pesan Online Sekarang',
    description = 'Yayo Wings menyajikan Korean Wings terenak di Demak. Nikmati ayam goreng Korea dengan saus spesial. Paket hemat mulai Rp 13.000. Pesan via GoFood, GrabFood, ShopeeFood sekarang!',
    keywords = 'yayo wings, korean wings, korean fried chicken, ayam goreng korea, demak, kuliner demak, makanan korea, wings, ayam goreng, gofood demak, grabfood demak, shopeefood demak, makanan enak di demak',
    ogImage = '/images/hero/hero.png',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    canonical = 'https://yayowings.com/'
}: SEOProps) {
    useEffect(() => {
        // Update document title
        document.title = title;

        // Update or create meta tags
        const updateMetaTag = (name: string, content: string, isProperty = false) => {
            let element: HTMLMetaElement | null;
            
            if (isProperty) {
                element = document.querySelector(`meta[property="${name}"]`) as HTMLMetaElement;
            } else {
                element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
            }

            if (!element) {
                element = document.createElement('meta');
                if (isProperty) {
                    element.setAttribute('property', name);
                } else {
                    element.setAttribute('name', name);
                }
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Update description
        updateMetaTag('description', description);
        
        // Update keywords
        updateMetaTag('keywords', keywords);

        // Update Open Graph tags
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:image', ogImage, true);
        updateMetaTag('og:type', ogType, true);
        updateMetaTag('og:url', canonical, true);

        // Update Twitter Card tags
        updateMetaTag('twitter:card', twitterCard);
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', ogImage);

        // Update canonical link
        let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', canonical);

        // Cleanup function
        return () => {
            // Optionally restore original values
        };
    }, [title, description, keywords, ogImage, ogType, twitterCard, canonical]);

    return null;
}
