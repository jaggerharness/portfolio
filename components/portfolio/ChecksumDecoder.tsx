"use client";

import { useMemo, useState } from "react";

const CHECKSUM_STATES = [
  "0x2A · nominal",
  "0xC0FFEE · caffeinated",
  "0xAMAZE · contact confirmed",
] as const;

type ChecksumDecoderProps = {
  className?: string;
  defaultIndex?: number;
};

export function ChecksumDecoder({ className, defaultIndex = 0 }: ChecksumDecoderProps) {
  const [stateIndex, setStateIndex] = useState(defaultIndex % CHECKSUM_STATES.length);
  const [tapCount, setTapCount] = useState(0);

  const label = useMemo(() => CHECKSUM_STATES[stateIndex], [stateIndex]);

  const onActivate = () => {
    const nextCount = tapCount + 1;

    if (nextCount >= 3) {
      setStateIndex((current) => (current + 1) % CHECKSUM_STATES.length);
      setTapCount(0);
      return;
    }

    setTapCount(nextCount);
  };

  return (
    <button
      type="button"
      className={className}
      onClick={onActivate}
      aria-label={`Epilogue checksum: ${label}. Click three times to decode next status.`}
      title="Checksum decoder: click 3x"
    >
      Epilogue checksum: {label}
    </button>
  );
}
