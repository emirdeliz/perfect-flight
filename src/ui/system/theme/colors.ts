export enum Colors {
  P1 = '#ED1B76',
  P2 = '#B02E5D',
  P3 = '#FDC3E9',
  N1 = '#111928',
  N2 = '#374151',
  N3 = '#6B7280',
  N4 = '#E5E7EB',
  N5 = '#F9FAFB',
}

export const AppThemeColorLight = {
  ...Colors,
};

export const AppThemeColorDark = {
  ...Colors,
};

export interface ColorsProps {
  p1?: boolean;
  p2?: boolean;
  p3?: boolean;
  n1?: boolean;
  n2?: boolean;
  n3?: boolean;
  n4?: boolean;
  n5?: boolean;
}

export interface AppThemeOptions {
  info?: boolean;
  success?: boolean;
  warn?: boolean;
  error?: boolean;
  default?: boolean;
  light?: boolean;
}

export interface AppThemeColor {
  bg?: string;
  bgHover?: string;
  text?: string;
  textLight?: string;
  border?: string;
}

export const getThemeColor = ({
  p1,
  p2,
  p3,
  n1,
  n2,
  n3,
  n4,
  n5,
}: ColorsProps) => {
  switch (true) {
    case p1:
      return Colors.P1;
    case p2:
      return Colors.P2;
    case p3:
      return Colors.P3;
    case n1:
      return Colors.N1;
    case n2:
      return Colors.N2;
    case n3:
      return Colors.N3;
    case n4:
      return Colors.N4;
    case n5:
      return Colors.N5;
  }
};

export const getThemeColorByOptions = (
  props?: AppThemeOptions
): AppThemeColor => {
  const { info, default: def } = props || {};

  switch (true) {
    case info:
      return {
        bg: Colors.P2,
        border: Colors.P2,
        text: Colors.N5,
      };
    case def:
      return {
        bg: Colors.N3,
        border: Colors.N3,
        text: Colors.N5,
      };
    default:
      return {
        bg: Colors.P2,
        border: Colors.P2,
        text: Colors.N5,
      };
  }
};
