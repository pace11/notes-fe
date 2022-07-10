import { Dialog, Classes, Button } from '@blueprintjs/core'

function Modal({ isOpen, onClose, title, description, onConfirmYes }) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className={Classes.DIALOG_HEADER}>{title}</div>
      <div className={Classes.DIALOG_BODY}>{description}</div>
      <div className={Classes.DIALOG_FOOTER}>
        <Button
          intent="primary"
          onClick={onConfirmYes}
          style={{ marginRight: '5px' }}
        >
          Yes
        </Button>
        <Button onClick={onClose}>No</Button>
      </div>
    </Dialog>
  )
}

export default Modal
