import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import AccountEditPageLayout from '@/components/AccountEditPageLayout';
import EditableFieldRow from '@/components/EditableFieldRow';

const EditPassword: React.FC = () => {
    const router = useRouter();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <AccountEditPageLayout onBack={() => router.back()}>
            <EditableFieldRow
                label="Ancien Mot de passe"
                value={oldPassword}
                onChange={setOldPassword}
            />
            <EditableFieldRow
                label="Nouveau Mot de passe"
                value={newPassword}
                onChange={setNewPassword}
            />
            <EditableFieldRow
                label="Confirmer Nouveau Mot de passe"
                value={confirmPassword}
                onChange={setConfirmPassword}
            />
        </AccountEditPageLayout>
    );
};

export default EditPassword;
