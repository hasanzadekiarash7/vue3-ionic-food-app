<template>
    <ion-list>
        <ion-item lines="none" class="flex-center">
            <ion-label>
                <ion-icon slot="start" :icon="basket"></ion-icon>
                basket
            </ion-label>
        </ion-item>
        <ion-item lines="none" class="flex-center">
            <ion-label>
                <ion-icon slot="start" :icon="notifications"></ion-icon>
                notifications
            </ion-label>
        </ion-item>
        <ion-item lines="none" class="flex-center">
            <ion-label>
                <ion-icon slot="start" :icon="ticket"></ion-icon>
                ticket
            </ion-label>
        </ion-item>
        <ion-item lines="none" class="flex-center">
            <ion-label>
                <ion-icon slot="start" :icon="add"></ion-icon>
                add
            </ion-label>
        </ion-item>
        <ion-item lines="none" class="flex-center">
            <ion-label>
                <ion-icon slot="start" :icon="settings"></ion-icon>
                settings
            </ion-label>
        </ion-item>
        <ion-item lines="none" class="flex-center">
            <ion-label>
                <ion-icon slot="start" :icon="language"></ion-icon>
                language
            </ion-label>
        </ion-item>
        <ion-item lines="none" class="flex-center">
            <ion-label>
                <ion-icon slot="start" :icon="information"></ion-icon>
                information
            </ion-label>
        </ion-item>
        <ion-item lines="none" class="flex-center">
            <ion-label>
                <ion-icon slot="start" :icon="search"></ion-icon>
                search
            </ion-label>
        </ion-item>
        <ion-item href="/payment" lines="none" class="flex-center">
            <ion-label>
                <ion-icon slot="start" :icon="sparkles"></ion-icon>
                premium
            </ion-label>
        </ion-item>
        <ion-item href="/login" lines="none" class="flex-center">
            <ion-label>
                <ion-icon slot="start" :icon="exit"></ion-icon>
                exit
            </ion-label>
        </ion-item>
    </ion-list>
</template>

<script setup lang="ts">
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { paperPlane, locationOutline, notifications, basket, ticket, add, settings, language, information, search, sparkles, exit } from 'ionicons/icons';
</script>

<style lang="scss" scoped>
@import url('../../Assets/interface/userSettings.scss');
</style>