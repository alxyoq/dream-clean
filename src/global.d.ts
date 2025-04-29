// src/global.d.ts
import 'img-comparison-slider';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'img-comparison-slider': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        /** URL or import of the “before” image */
        before?: string;
        /** URL or import of the “after” image */
        after?: string;
        /** “horizontal” (default) or “vertical” */
        orientation?: 'horizontal' | 'vertical';
        /** size in px of the draggable handle */
        handleSize?: number;
        /** CSS color string for the handle */
        handleColor?: string;
        /** enable hover-on-drag behavior */
        hover?: boolean;
        /** initial slider value (0–100) */
        value?: number;
      };
    }
  }
}
export {};
