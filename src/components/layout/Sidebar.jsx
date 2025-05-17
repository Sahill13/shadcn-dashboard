import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  File, User, Bell, MessageSquare, CreditCard, 
  Users, HelpCircle, Rss, Link as LinkIcon, 
  ExternalLink, Plug, ChevronDown, ChevronRight 
} from "lucide-react";
import { navigation } from "../../lib/data";

const iconComponents = {
  "file-text": File,
  "user": User,
  "bell": Bell,
  "message-square": MessageSquare,
  "credit-card": CreditCard,
  "users": Users,
  "help-circle": HelpCircle,
  "rss": Rss,
  "link": LinkIcon,
  "external-link": ExternalLink,
  "plug": Plug
};

export function Sidebar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(["Articles"]);

  const toggleItem = (title) => {
    setExpanded(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title) 
        : [...prev, title]
    );
  };

  const isActive = (href) => location.pathname === href;

  return (
    <div className="h-full w-64 border-r bg-white shadow-sm">
      <div className="flex h-14 items-center justify-between border-b px-4">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold">Dash</span>
        </Link>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-purple-500"></div>
          <span className="text-sm">amazon.com</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>

      <div className="h-[calc(100vh-3.5rem)] overflow-auto py-2">
        <nav className="space-y-1 px-2">
          {navigation.map((item) => {
            const IconComponent = iconComponents[item.icon] || File;
            const isItemExpanded = expanded.includes(item.title);
            const hasChildren = item.children && item.children.length > 0;

            return (
              <div key={item.title} className="mb-1">
                <Link
                  to={hasChildren ? "#" : item.href}
                  className={`
                    flex items-center rounded-md px-3 py-2 text-sm font-medium
                    ${isActive(item.href) && !hasChildren ? "bg-gray-100" : "hover:bg-gray-50"}
                  `}
                  onClick={(e) => {
                    if (hasChildren) {
                      e.preventDefault();
                      toggleItem(item.title);
                    }
                  }}
                >
                  <IconComponent className="mr-2 h-4 w-4 text-gray-500" />
                  <span>{item.title}</span>
                  {hasChildren && (
                    <div className="ml-auto">
                      {isItemExpanded ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </div>
                  )}
                </Link>
                
                {hasChildren && isItemExpanded && (
                  <div className="mt-1 ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        to={child.href}
                        className={`
                          block rounded-md px-3 py-2 text-sm font-medium
                          ${isActive(child.href) ? "bg-gray-100" : "hover:bg-gray-50"}
                          ${child.active ? "text-blue-500" : ""}
                        `}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}