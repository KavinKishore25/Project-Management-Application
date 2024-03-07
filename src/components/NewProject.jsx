import Input from "./Input"
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dateDue = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDateDue = dateDue.current.value;

        if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDateDue.trim() === "") {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dateDue: enteredDateDue
        })
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input!</h2>
                <p className="text-stone-600 mb-4">One or more input fields missing value.</p>
                <p className="text-stone-600 mb-4">Please provide a valid value for every input field.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
                    <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" textArea />
                    <Input type="date" ref={dateDue} label="Date Due" />
                </div>
            </div>
        </>
    )
}