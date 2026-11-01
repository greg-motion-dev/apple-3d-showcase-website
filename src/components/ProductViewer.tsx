"use client";

import React, { useEffect, useState } from "react";
import useMacbookStore from "@/store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import MacbookModel14 from "./models/Macbook-14";
import StudioLights from "./three/StudioLights";
import ModelSwitcher from "./three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";

const ProductViewer: React.FC = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();
  const [mounted, setMounted] = useState<boolean>(false);

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  // Ensure window-dependent hooks (useMediaQuery) & Canvas run only on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>
      <div className="controls">
        <p className="info">
          MacBook Pro | Available in 14" & 16" in Space Gray & Dark Colors
        </p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5bd" && "active",
              )}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active",
              )}
            />
          </div>

          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      {mounted && (
        <Canvas
          id="canvas"
          camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
        >
          <StudioLights />
          <MacbookModel14 scale={0.06} position={[0, 0, 0]} />
          <ModelSwitcher
            scale={isMobile ? scale - 0.03 : scale}
            isMobile={isMobile}
          />
        </Canvas>
      )}
    </section>
  );
};

export default ProductViewer;
