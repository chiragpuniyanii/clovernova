"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const parent = canvas.parentElement;
    if (!parent) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    
    // Mouse state
    let targetSpeed = 2; // Default resting speed
    let currentSpeed = targetSpeed;
    let targetCenterX = parent.clientWidth / 2;
    let targetCenterY = parent.clientHeight / 2;
    let centerX = targetCenterX;
    let centerY = targetCenterY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate mouse velocity for speed
      const dx = x - targetCenterX;
      const dy = y - targetCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // The vanishing point follows the cursor exactly
      targetCenterX = x;
      targetCenterY = y;
      
      // Increase speed based on how fast the mouse is moving
      targetSpeed = Math.min(8, 2 + (distance * 0.05));
      
      // Reset speed after a timeout
      clearTimeout((window as any).speedTimeout);
      (window as any).speedTimeout = setTimeout(() => {
        targetSpeed = 1.5;
      }, 300);
    };

    const handleMouseLeave = () => {
      targetCenterX = parent.clientWidth / 2;
      targetCenterY = parent.clientHeight / 2;
      targetSpeed = 1.5;
    };

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    class Star {
      x: number;
      y: number;
      z: number;
      color: string;
      canvasWidth: number;
      canvasHeight: number;
      opacity: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        // Distribute stars evenly
        this.x = (Math.random() - 0.5) * canvasWidth * 3;
        this.y = (Math.random() - 0.5) * canvasHeight * 3;
        this.z = Math.random() * canvasWidth;
        this.opacity = 0;
        
        // Colors matching the "Antigravity" vibe: Blues, Purples, Pinks, Oranges, Greens
        const colors = [
          '#3b82f6', // Blue
          '#8b5cf6', // Purple
          '#ec4899', // Pink
          '#f97316', // Orange
          '#10b981', // Emerald/Green
          '#6366f1', // Indigo
        ]; 
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(speed: number) {
        this.z -= speed;
        // Fade in new stars
        if (this.opacity < 1) {
            this.opacity += 0.05;
        }

        if (this.z <= 0) {
          this.z = this.canvasWidth;
          this.x = (Math.random() - 0.5) * this.canvasWidth * 3;
          this.y = (Math.random() - 0.5) * this.canvasHeight * 3;
          this.opacity = 0;
        }
      }

      draw(ctx: CanvasRenderingContext2D, cx: number, cy: number) {
        // Perspective projection
        const fov = 800; // Field of view equivalent
        const sx = (this.x / this.z) * fov + cx;
        const sy = (this.y / this.z) * fov + cy;

        // Tail projected position (fixed length behind current z)
        // Length scales with speed
        const tailLength = 40 + (currentSpeed * 10);
        const tailZ = this.z + tailLength; 
        const px = (this.x / tailZ) * fov + cx;
        const py = (this.y / tailZ) * fov + cy;

        // Don't draw if outside canvas to save performance
        if (sx < 0 || sx > this.canvasWidth || sy < 0 || sy > this.canvasHeight) {
           return;
        }

        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        
        // Closer stars are thicker and more opaque
        const depthRatio = 1 - (this.z / this.canvasWidth);
        const size = Math.max(0.5, depthRatio * 3);
        
        // Apply opacity from fade-in and depth
        ctx.globalAlpha = Math.max(0, Math.min(1, this.opacity * depthRatio));
        ctx.strokeStyle = this.color;
        ctx.lineWidth = size;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
    }

    const init = () => {
      stars = [];
      // Adjust star count based on screen size
      const numberOfStars = Math.floor((canvas.width * canvas.height) / 3000);
      
      for (let i = 0; i < numberOfStars; i++) {
        stars.push(new Star(canvas.width, canvas.height));
      }
      
      targetCenterX = canvas.width / 2;
      targetCenterY = canvas.height / 2;
      centerX = targetCenterX;
      centerY = targetCenterY;
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Smoothly interpolate center X/Y and speed
      centerX += (targetCenterX - centerX) * 0.1;
      centerY += (targetCenterY - centerY) * 0.1;
      currentSpeed += (targetSpeed - currentSpeed) * 0.05;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < stars.length; i++) {
        stars[i].update(currentSpeed);
        stars[i].draw(ctx, centerX, centerY);
      }
      
      // Reset alpha
      ctx.globalAlpha = 1;
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const setCanvasSize = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      init();
    };

    setCanvasSize();
    
    const resizeObserver = new ResizeObserver(() => {
        setCanvasSize();
    });
    
    resizeObserver.observe(parent);
    
    animate();

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
