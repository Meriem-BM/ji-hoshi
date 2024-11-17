import Modal from "../../Modal";

interface IConfirmDeleteModalProps {
  show: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}

export const ConfirmDeleteModal = ({
  show,
  handleClose,
  handleDelete,
}: IConfirmDeleteModalProps) => {
  return (
    <Modal isOpen={show} onClose={handleClose}>
      <Modal.Header title="Delete Category" />
      <Modal.Body>
        <p>Are you sure you want to delete this category?</p>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          type="button"
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded ml-4"
          onClick={handleClose}
        >
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
};
