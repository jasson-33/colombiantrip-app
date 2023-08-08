import styles from './legalContent.module.css';

const LegalContent = ({ legalcontent }) => {
    const { Bigola } = useContext(ColombianContext);
    return (
      <div className={`${Bigola.className}`} dangerouslySetInnerHTML={{__html:legalcontent}} />
    );
  };
  
  export default LegalContent;