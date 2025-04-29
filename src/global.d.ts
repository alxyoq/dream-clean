// src/global.d.ts
import 'img-comparison-slider';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'img-comparison-slider': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        before?: string;
        after?: string;
        orientation?: 'horizontal' | 'vertical';
        handleSize?: number;
        handleColor?: string;
        hover?: boolean;
        value?: number;
      };
    }
  }
}
export {};
