import React from "react";

export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-primary mb-4">Loading ...</h2>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </main>
  );
}
