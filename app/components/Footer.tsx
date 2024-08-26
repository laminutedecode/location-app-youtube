import React from 'react';
import Link from 'next/link';
import {Mail, MapPin } from 'lucide-react'; 

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-lg font-semibold mb-4">À propos</h2>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet praesentium sit, corporis tempore asperiores molestiae fugit quo cupiditate voluptatem laudantium aperiam vel veritatis numquam temporibus repellendus, nisi totam dolorem possimus inventore blanditiis!
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Navigation</h2>
            <ul>
              <li>
                <Link href="/" className='hover:text-yellow-500'>
                 Accueil
                </Link>
              </li>
              <li>
                <Link href="/" className='hover:text-yellow-500'>
                 La villa
                </Link>
              </li>
              <li>
                <Link href="/" className='hover:text-yellow-500'>
                 À propos
                </Link>
              </li>
              <li>
                <Link href="/" className='hover:text-yellow-500'>
                 Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <ul>
              <li className="flex items-center mb-2">
                <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">123 Rue Exemple, Paris, France</span>
              </li>
              <li className="flex items-center mb-2">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-400">contact@monsiteweb.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>© 2024 LAMINUTEDECODE - Tous droits réservés.</p>
        </div>

      </div>
    </footer>
  );
}
