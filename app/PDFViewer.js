"use client";

import { useEffect, useRef, useState } from "react";

export default function PDFViewer({ url }) {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadPDF() {
      try {
        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        const pdf = await pdfjsLib.getDocument(url).promise;
        if (cancelled) return;

        setPageCount(pdf.numPages);

        for (let i = 1; i <= pdf.numPages; i++) {
          if (cancelled) return;
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 1.5 });

          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.style.width = "100%";
          canvas.style.maxWidth = `${viewport.width}px`;
          canvas.style.height = "auto";
          canvas.style.display = "block";
          canvas.style.margin = "0 auto 18px";
          canvas.style.borderRadius = "8px";
          canvas.style.boxShadow = "0 2px 16px rgba(0,0,0,0.25)";

          const ctx = canvas.getContext("2d");
          await page.render({ canvasContext: ctx, viewport }).promise;

          if (!cancelled && containerRef.current) {
            containerRef.current.appendChild(canvas);
          }
        }

        if (!cancelled) setLoading(false);
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    loadPDF();
    return () => { cancelled = true; };
  }, [url]);

  if (error) {
    return (
      <div style={{ padding: 24, color: "var(--muted)", textAlign: "center" }}>
        <p>Could not show preview. <a href={url} target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>Open PDF</a></p>
      </div>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      {loading && (
        <p style={{ textAlign: "center", color: "var(--muted)", padding: 32 }}>
          Loading preview{pageCount > 0 ? ` (${pageCount} pages)` : ""}…
        </p>
      )}
      <div ref={containerRef} />
    </div>
  );
}
