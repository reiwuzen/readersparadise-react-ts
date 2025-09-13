import '../styles/sourceSelect.css';
type SourceSelectProps = {
    onBack : () => void;
    onNext: () => void;
}
const SourceSelect = ({onBack, onNext}: SourceSelectProps) => {
    return(
        <div className="sourceSelectBox">
           
      <h2>Select Sources</h2>
      <button id='b' onClick={onBack}>Back</button>
      <button id='n' onClick={onNext}>Next</button>
    
        </div>
    )
}
export default SourceSelect;
export {type SourceSelectProps}