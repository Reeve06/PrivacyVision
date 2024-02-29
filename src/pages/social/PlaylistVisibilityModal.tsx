import React from 'react';
import { IonModal, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonImg } from '@ionic/react';

interface Playlist {
  id: string;
  name: string;
  images: { url: string }[];
  description: string;
  owner: { display_name: string };
  collaborative: boolean;
  public: boolean;
}

interface Props {
  isOpen: boolean;
  playlist: Playlist | null;
  onConfirm: () => void;
  onCancel: () => void;
}

const PlaylistVisibilityModal: React.FC<Props> = ({ isOpen, playlist, onConfirm, onCancel }) => {
  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Confirm Visibility Change</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {playlist && (
          <>
            <IonImg
              src={playlist.images[0].url}
              slot="start"
              style={{ width: "50px", height: "50px" }}
            />
            <p>Playlist: {playlist.name}</p>
            <p>Description: {playlist.description}</p>
            <p>Owner: {playlist.owner.display_name}</p>
            <p>Collaborative: {playlist.collaborative ? 'Yes' : 'No'}</p>
            <p>Public: {playlist.public ? 'Yes' : 'No'}</p>
            <p>Are you sure you want to toggle the visibility of this playlist?</p>
            <IonButton onClick={onConfirm}>Yes</IonButton>
            <IonButton onClick={onCancel}>Cancel</IonButton>
          </>
        )}
      </IonContent>
    </IonModal>
  );
};

export default PlaylistVisibilityModal;
