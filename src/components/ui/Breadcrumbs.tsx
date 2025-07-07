import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  // Generate breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://latomatinafestindia.com${item.href}` : undefined
    }))
  };

  React.useEffect(() => {
    // Add breadcrumb structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbStructuredData);
    script.id = 'breadcrumb-structured-data';
    
    // Remove existing breadcrumb structured data if any
    const existingScript = document.getElementById('breadcrumb-structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('breadcrumb-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [items]);

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`${className}`}
      role="navigation"
    >
      <ol 
        className="flex items-center space-x-2 text-sm text-gray-600"
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => (
          <li 
            key={index}
            className="flex items-center"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && (
              <ChevronRight 
                className="w-4 h-4 mx-2 text-gray-400" 
                aria-hidden="true"
              />
            )}
            
            {item.href && !item.current ? (
              <a
                href={item.href}
                className="hover:text-tomato-600 transition-colors duration-200 flex items-center"
                itemProp="item"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href!)?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                {index === 0 && (
                  <Home className="w-4 h-4 mr-1" aria-hidden="true" />
                )}
                <span itemProp="name">{item.label}</span>
              </a>
            ) : (
              <span 
                className={`flex items-center ${
                  item.current 
                    ? 'text-tomato-600 font-medium' 
                    : 'text-gray-600'
                }`}
                itemProp="name"
                aria-current={item.current ? 'page' : undefined}
              >
                {index === 0 && (
                  <Home className="w-4 h-4 mr-1" aria-hidden="true" />
                )}
                {item.label}
              </span>
            )}
            
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
