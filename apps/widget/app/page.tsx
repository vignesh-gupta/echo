"use client";

import { useVapi } from "@/modules/widget/hooks/use-vapi";
import { Button } from "@echo/ui/components/button";

export default function Page() {
  const {
    endCall,
    isConnected,
    isConnecting,
    isSpeaking,
    startCall,
    transcript,
  } = useVapi();

  return (
    <div className="flex flex-col items-center justify-center min-h-svh max-w-md mx-auto w-full">
      <Button
        onClick={isConnected ? endCall : startCall}
        disabled={isConnecting}
      >
        {isConnecting
          ? "Connecting..."
          : isConnected
            ? isSpeaking
              ? "End Call"
              : "End Call (Not Speaking)"
            : "Start Call"}
      </Button>

      <pre className="mt-4 p-4 border rounded bg-gray-100 w-full">
        {JSON.stringify(
          {
            isConnected,
            isConnecting,
            isSpeaking,
          },
          null,
          2
        )}
      </pre>

      <pre className="mt-4 p-4 border rounded bg-gray-100 w-full">
        {transcript.length
          ? JSON.stringify(transcript, null, 2)
          : "Transcript will appear here..."}
      </pre>
    </div>
  );
}
