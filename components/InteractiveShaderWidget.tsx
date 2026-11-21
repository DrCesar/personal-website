"use client";

import { useState, useRef, useEffect } from "react";
import { Sliders, RefreshCw } from "lucide-react";

export default function InteractiveShaderWidget() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [frequency, setFrequency] = useState(0.04);
  const [amplitude, setAmplitude] = useState(25);
  const [speed, setSpeed] = useState(0.03);
  const [hueOffset, setHueOffset] = useState(200);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let step = 0;
    let animId: number;

    const width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    const height = (canvas.height = 200);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw mathematical wave lines with dynamic color shifting
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath();
        const layerHue = (hueOffset + layer * 30) % 360;
        ctx.strokeStyle = `hsla(${layerHue}, 75%, 55%, ${0.35 + layer * 0.2})`;
        ctx.lineWidth = 2;

        for (let x = 0; x < width; x += 4) {
          const y =
            height / 2 +
            Math.sin(x * frequency + step + layer) * amplitude +
            Math.cos(x * 0.02 - step) * (amplitude * 0.35);

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      step += speed;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [frequency, amplitude, speed, hueOffset]);

  const resetParams = () => {
    setFrequency(0.04);
    setAmplitude(25);
    setSpeed(0.03);
    setHueOffset(200);
  };

  return (
    <div className="my-8 rounded-2xl border border-surface-border bg-surface/50 p-5 backdrop-blur-md">
      <div className="flex items-center justify-between pb-3 border-b border-surface-border">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-accent" />
          <span className="text-xs font-mono uppercase tracking-wider font-semibold">
            Interactive Wave Simulation
          </span>
        </div>
        <button
          onClick={resetParams}
          className="text-xs text-subtle hover:text-foreground flex items-center gap-1 transition-colors"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      <div className="relative my-4 rounded-xl overflow-hidden bg-background/60 border border-surface-border">
        <canvas ref={canvasRef} className="w-full h-[180px] block" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-subtle">
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between">
            <span>Frequency</span>
            <span className="text-foreground">{frequency.toFixed(3)}</span>
          </div>
          <input
            type="range"
            min="0.01"
            max="0.1"
            step="0.005"
            value={frequency}
            onChange={(e) => setFrequency(parseFloat(e.target.value))}
            className="w-full accent-accent cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between">
            <span>Amplitude</span>
            <span className="text-foreground">{amplitude}px</span>
          </div>
          <input
            type="range"
            min="5"
            max="50"
            step="1"
            value={amplitude}
            onChange={(e) => setAmplitude(parseInt(e.target.value))}
            className="w-full accent-accent cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between">
            <span>Wave Speed</span>
            <span className="text-foreground">{speed.toFixed(3)}</span>
          </div>
          <input
            type="range"
            min="0.005"
            max="0.08"
            step="0.005"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="w-full accent-accent cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between">
            <span>Color Spectrum</span>
            <span className="text-foreground">{hueOffset} deg</span>
          </div>
          <input
            type="range"
            min="0"
            max="360"
            step="5"
            value={hueOffset}
            onChange={(e) => setHueOffset(parseInt(e.target.value))}
            className="w-full accent-accent cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
