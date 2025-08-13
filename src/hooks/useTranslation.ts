import { useI18next } from 'gatsby-plugin-react-i18next';
import type { TFunction } from 'i18next';

interface HookOptions {
  keyPrefix: string;
}

export const useTranslation = (options?: HookOptions): { t: TFunction } => {
  return useI18next(undefined, options);
};
