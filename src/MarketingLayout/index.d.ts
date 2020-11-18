import * as React from 'react';

export interface MarketingLayoutProps {
  dataHook?: string;
  image?: React.ReactNode;
  imageBackgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  inverted?: boolean;
  actions?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  hiddenBadge?: boolean;
}

export default class MarketingLayout extends React.PureComponent<
  MarketingLayoutProps
> {}
