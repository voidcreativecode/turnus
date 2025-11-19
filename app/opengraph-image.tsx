import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Turnus - Gestão de Plantões Médicos";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "#3B3B3B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#C3FFD4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {/* Hourglass Icon */}
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C3FFD4"
            strokeWidth="2"
          >
            <path d="M5 22h14" />
            <path d="M5 2h14" />
            <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
            <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
          </svg>
          <div style={{ fontSize: 96, fontWeight: "bold" }}>Turnus</div>
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#B5FFFF",
            textAlign: "center",
            maxWidth: "900px",
          }}
        >
          Gestão Inteligente de Plantões Médicos
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#839CC7",
            marginTop: "20px",
            fontStyle: "italic",
          }}
        >
          Tempus sub control
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
