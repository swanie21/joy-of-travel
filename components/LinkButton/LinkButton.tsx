import Link from 'next/link';
import { forwardRef, HTMLProps } from 'react';

import styles from './LinkButton.module.scss';

type AnchorLinkProps = HTMLProps<HTMLAnchorElement>;

const AnchorLink = forwardRef<HTMLAnchorElement, AnchorLinkProps>((props, ref) => (
  <a {...props} ref={ref}>
    {props.children}
  </a>
));
AnchorLink.displayName = 'AnchorLink';

interface LinkButtonProps {
  href: string;
  link: string | React.ReactNode;
  buttonStyle?: string;
  dataTestId?: string;
  id?: string;
  prefetch?: boolean | undefined;
  target?: string;
  size?: string;
}

export const LinkButton: React.FunctionComponent<LinkButtonProps> = ({ href, id, link, buttonStyle, dataTestId, prefetch = undefined, size, target }) => {
  return (
    <Link href={href} passHref prefetch={prefetch}>
      <AnchorLink
        className={`${styles.button} ${styles[buttonStyle || 'primary']} ${styles[size || 'large']}`}
        data-testid={dataTestId}
        id={id}
        target={target}
      >
        {link}
      </AnchorLink>
    </Link>
  );
};  
