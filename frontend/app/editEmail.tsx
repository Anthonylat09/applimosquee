import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import AccountEditPageLayout from '@/components/AccountEditPageLayout';
import EditableFieldRow from '@/components/EditableFieldRow';

// Mock function to fetch user data
const fetchUserData = async () => {
    // Replace with your actual API call
    return { nom: 'Doe', prenom: 'John' };
};

const EditName: React.FC = () => {
    const router = useRouter();
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');

    useEffect(() => {
        // Fetch user data on mount
        fetchUserData().then((data) => {
            setNom(data.nom);
            setPrenom(data.prenom);
        });
    }, []);

    return (
        <AccountEditPageLayout onBack={() => router.back()}>
            <EditableFieldRow label="Nom" value={nom} onChange={setNom} />
            <EditableFieldRow label="Prénom" value={prenom} onChange={setPrenom} />
        </AccountEditPageLayout>
    );
};

export default EditName;
