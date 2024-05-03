<template>
    <ion-card
        style="box-shadow: 2px 2px 15px 0 rgba(0, 0, 0, 0.5); border: none; height: 140px; margin: 1rem; margin-left: 0; margin-right: 0; margin-bottom: 0.1rem;">
        <ion-card-content class="profile-card">
            <img class="profile-card-image" src="../../Assets/images/user-avatar-male-5.png" alt="">
            <div class="profile-card-content">
                <ion-label class="profile-card-content-title">kiyarash hasanzadeh</ion-label>
                <ion-text class="profile-card-content-location">
                    <ion-icon :icon="locationOutline"></ion-icon>
                    los Angeles, USA
                </ion-text>
                <ion-label class="profile-card-content-follow">follower 150 | fallowing 300</ion-label>
            </div>
        </ion-card-content>
    </ion-card>
</template>

<script setup lang="ts">
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { paperPlane, add, locationOutline } from 'ionicons/icons';
</script>

<style lang="scss" scoped>
@import url('../../Assets/interface/profileCard.scss');
</style>