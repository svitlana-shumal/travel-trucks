'use client';

export default function CamperDetail({ params }: { params: { id: string } }) {
  return (
    <main>
      <div>
        <h1>Camper Details</h1>
        <p>ID: {params.id}</p>
      </div>
    </main>
  );
}
