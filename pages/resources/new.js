import React, { useState } from 'react';
import Layout from '../../components/Layout';

const DEFAULT_DATA = {
    title: "",
    description: "",
    link: "",
    priority: "2",
    timeToFinish: 60
}

const ResourceCreate = () => {
    const [form, setForm] = useState(DEFAULT_DATA);

    const handleResourceFormSubmit = () => {
        alert(JSON.stringify(form));
    }

    const handleResourceFormReset = () => {
        setForm(DEFAULT_DATA);
    }

    const onFormChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setForm({...form, [key]: value});
    };

    return (
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <div className="resource-form">
                            <h1 className="title">Add New Resource</h1>
                            <form>
                                <div className="field">
                                    <label className="label">Title</label>
                                    <div className="control">
                                        <input 
                                            className="input" 
                                            type="text" 
                                            placeholder="Learning React" 
                                            name="title"
                                            value={form.title}
                                            onChange={onFormChange}
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Description</label>
                                    <div className="control">
                                        <textarea 
                                            className="textarea" 
                                            placeholder="I love coding ..." 
                                            name="description"
                                            value={form.description}
                                            onChange={onFormChange}
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Link</label>
                                    <div className="control">
                                        <input 
                                            className="input" 
                                            type="text" 
                                            placeholder="https://linktoresource.com"
                                            name="link"
                                            value={form.link}
                                            onChange={onFormChange}
                                            />
                                    </div>
                                </div>

                                <div class="field">
                                    <label className="label">Priority</label>
                                    <div className="control">
                                        <div className="select">
                                            <select 
                                                value={form.priority} 
                                                name="priority"
                                                onChange={onFormChange}
                                            >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Time to finish</label>
                                    <div className="control">
                                        <input 
                                            className="input" 
                                            type="number" 
                                            placeholder="60"  
                                            name="timeToFinish"
                                            value={form.timeToFinish}
                                            onChange={onFormChange}
                                        />
                                    </div>
                                    <p className="help">Time in minutes</p>
                                </div>

                                <div className="field is-grouped">
                                    <div className="control">
                                        <button 
                                            className="button is-link" 
                                            type="button" 
                                            onClick={handleResourceFormSubmit}
                                        >Submit</button>
                                    </div>
                                    <div className="control">
                                        <button 
                                            className="button is-link is-light" 
                                            type="button"
                                            onClick={handleResourceFormReset}
                                        >Reset</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ResourceCreate;