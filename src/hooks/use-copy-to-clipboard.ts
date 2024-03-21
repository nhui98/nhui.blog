import { useCallback, useState } from "react";

type CopyStatus = {
  success: boolean;
  textCopied?: string;
};

export function useCopyToClipboard() {
  const [state, setState] = useState<CopyStatus | null>(null);

  const copyToClipboard = useCallback((value: string) => {
    const copy = async () => {
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
          setState({ success: true, textCopied: value });
        } else {
          throw new Error("writeText not supported");
        }
      } catch (e) {
        setState({ success: false });
      }
    };

    copy();
  }, []);

  return [state, copyToClipboard] as const;
}
