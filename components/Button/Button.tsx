import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonStyle?: string;
  size?: string;
  styleClass?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ label, onClick, buttonStyle, size, styleClass }) => {
  return (
    <button className={`${styles.button} ${styles[buttonStyle || 'primary']} ${styles[size || 'large']} ${styleClass}`} onClick={onClick}>
      {label}
    </button>
  );
};
