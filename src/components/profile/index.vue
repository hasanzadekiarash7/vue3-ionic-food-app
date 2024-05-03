<template>
    <ion-page>
        <ion-content>
            <div class="">
                <profile-card />
            </div>
            <div>
                <user-settings />
            </div>
            <p style="margin: 1rem; margin-top: 0; margin-left: 2rem;">{{ version }}</p>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { paperPlane, add, remove } from 'ionicons/icons';
import { version } from "../../../package.json";
import ProfileCard from './profileCard.vue';
import UserSettings from './userSettings.vue';
</script>

<style lang="scss" scoped></style>