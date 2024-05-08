import { asideModalTheme } from '@/styles/theme';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react';
import { PropsWithChildren } from 'react';

type AsideModalProps = PropsWithChildren & {
  show: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
};
const AsideModal: React.FC<AsideModalProps> = ({
  show,
  onClose,
  header,
  children,
  footer,
}) => {
  return (
    <Modal
      show={show}
      dismissible={false}
      onClose={onClose}
      theme={asideModalTheme.modal}
      size={'md'}
    >
      <ModalHeader>{header}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    </Modal>
  );
};

export default AsideModal;
