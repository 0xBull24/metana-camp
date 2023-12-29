import * as styles from './cssModules.module.css'

const CssModules = () => {
  return (
    <div>
      <p className={styles.prim}>
        This is a local styled react component.
      </p>
    </div>
  );
}

export default CssModules;