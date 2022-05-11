import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonStyle?: string;
  size?: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ label, onClick, buttonStyle, size }) => {
  return (
    <button className={`${styles.button} ${styles[buttonStyle || 'primary']} ${styles[size || 'large']}`} onClick={onClick}>
      {label}
    </button>
  );
};
