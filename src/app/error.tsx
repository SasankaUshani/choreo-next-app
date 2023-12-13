'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>ERROR</h2>
      <h4>Oops! Something went wrong!</h4>

      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
