<template>
    <ion-content>
        <ion-list class="space-around" style="box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);">
            <ion-item v-for="item in 3" lines="full" class="notification full-width">
                <ion-avatar class="notification-image" slot="start">
                    <img src="../Assets/images/user-avatar-male-5.png" />
                </ion-avatar>
                <div class="notification-content">
                    <ion-label class="notification-content-title">Item Avatar</ion-label>
                    <ion-label class="notification-content-subtitle">Item Avatar</ion-label>
                    <ion-text class="notification-content-id">Item Avatar</ion-text>
                </div>
            </ion-item>
        </ion-list>
    </ion-content>
</template>

<script setup lang="ts">
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { paperPlane, locationOutline, notifications, basket, ticket, add, settings, language, information, search, sparkles } from 'ionicons/icons';
</script>

<style lang="scss" scoped>
@import url('../Assets/interface/notification.scss');
</style>