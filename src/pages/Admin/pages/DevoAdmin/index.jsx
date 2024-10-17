import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importa los estilos de Quill

export const Devo = () => {
    const [editorHtml, setEditorHtml] = useState('');

    const handleChange = (html) => {
        setEditorHtml(html);
        console.log(html);
    };

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'], // Opciones de texto
            [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Listas
        ],
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#EAE9E5]">
            <div className="w-full max-w-md p-6 bg-[#65633F] rounded-lg shadow-2xl">
                <ReactQuill 
                    value={editorHtml} 
                    onChange={handleChange} 
                    modules={modules} 
                />
                <h3 className="mt-4 text-black">Contenido en HTML:</h3>
                <div dangerouslySetInnerHTML={{ __html: editorHtml }} className="mt-2 text-white" />
                <h3 className="mt-4 text-black">Gaaaaaaaaaaaaaaaaaaa:</h3>
            </div>
        </div>
    );
};

export default Devo;
