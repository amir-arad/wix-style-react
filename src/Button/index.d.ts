import * as React from 'react';
import { OmitPolyfill, IconElement, TooltipCommonProps } from '../common';

export type ButtonWithAsProp<T> =
  | ButtonAsButtonProps<T>
  | ButtonAsAnchorProps<T>
  | ButtonGenericProps<T>
  | ButtonAsComponentProps<T>;

type ButtonAsButtonProps<T> = React.ButtonHTMLAttributes<HTMLButtonElement> &
  T & {
    as?: 'button';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };

type ButtonAsAnchorProps<T> = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  T & {
    as: 'a';
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  };

type ButtonGenericProps<T> = T & {
  as: keyof OmitPolyfill<HTMLElementTagNameMap, 'a' | 'button'>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  [additionalProps: string]: any;
};

type ButtonAsComponentProps<T> = T & {
  as: React.ComponentType<any>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  [additionalProps: string]: any;
};

export type ButtonProps = ButtonWithAsProp<{
  className?: string;
  skin?: ButtonSkin;
  priority?: ButtonPriority;
  size?: ButtonSize;
  fullWidth?: boolean;
  suffixIcon?: IconElement;
  prefixIcon?: IconElement;
  disabled?: boolean;
  dataHook?: string;
  ellipsis?: boolean;
  showTooltip?: boolean;
  tooltipProps?: TooltipCommonProps;
}>;

export default class Button extends React.Component<ButtonProps> {}

export type ButtonSkin =
  | 'standard'
  | 'inverted'
  | 'destructive'
  | 'premium'
  | 'dark'
  | 'light'
  | 'transparent'
  | 'premium-light';

export type ButtonPriority = 'primary' | 'secondary';

export type ButtonSize = 'tiny' | 'small' | 'medium' | 'large';
