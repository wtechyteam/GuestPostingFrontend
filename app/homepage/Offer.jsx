import React from "react";

export default function BlueDiv() {
  return (
    <div className="h-[32px] md:text-white sm-text-white w-full overflow-hidden" style={{ backgroundColor: '#005EFF' }}>
      <div className="flex items-center justify-start h-full animate-scroll">
        <p className="text-gray-10 text-white font-bold whitespace-nowrap">
          Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 |
          Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 |
        </p>
        <p className="text-gray-10 text-white font-bold whitespace-nowrap">
          Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 |
          Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 | Guest Post Under $10 |
        </p>
      </div>
      <style jsx>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); 
          }
        }
      `}</style>
    </div>
  );
}
