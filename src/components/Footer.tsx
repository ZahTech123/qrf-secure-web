import React from 'react';
import { Headset, MapPin, Radio, ShieldCheck } from 'lucide-react';

const services = [
  'Emergency Response Planning',
  'Vehicle Recovery Support',
  'Armed Escorts & Protection',
  'Command Center Solutions',
  'Radio Communications',
  'Security Consultancy',
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-12 text-slate-600 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.95fr_0.9fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                <img
                  src="/qrf-favicon-64x64.png"
                  alt="QRF Communications"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <span className="block text-xl font-black text-slate-950">QRF Communications</span>
                <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Security Response</span>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-500">
              Your leader in innovative security, emergency response, and radio communications solutions across Papua New Guinea.
            </p>
            <p className="mt-5 text-sm font-semibold text-slate-400">
              Copyright 2026 QRF Communications. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-slate-950">
              <ShieldCheck className="h-4 w-4 text-cyan-700" />
              Services
            </h4>
            <ul className="grid gap-2 text-sm font-semibold text-slate-500">
              {services.map((service) => (
                <li key={service} className="transition-colors hover:text-cyan-700">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-slate-950">
              <Headset className="h-4 w-4 text-cyan-700" />
              Contact
            </h4>
            <div className="grid gap-4 text-sm text-slate-500">
              <div className="rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200">
                <div className="mb-2 flex items-center gap-2 font-black text-slate-950">
                  <MapPin className="h-4 w-4 text-cyan-700" />
                  Service Area
                </div>
                <p>Papua New Guinea</p>
                <p>Port Moresby and surrounding areas</p>
              </div>
              <div className="rounded-lg bg-slate-950 p-4 text-slate-300">
                <div className="mb-2 flex items-center gap-2 font-black text-white">
                  <Radio className="h-4 w-4 text-cyan-300" />
                  Specialties
                </div>
                <p>Security management, emergency response, and radio communications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
