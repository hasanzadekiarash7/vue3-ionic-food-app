<template>
    <ion-page>
        <ion-content>
            <div style="margin-top: 40px;">
                <ion-label class="history-label">my browsing history</ion-label>
                <div class="history-button">
                    <ion-button class="history-button-fill" expand="full">cook book</ion-button>
                    <ion-button class="history-button-outline" expand="full" fill="clear">collection</ion-button>
                </div>
            </div>
            <history-list />
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { paperPlane, paperPlaneSharp } from 'ionicons/icons';
import HistoryList from '@/components/history/historyList.vue';
</script>

<style lang="scss" scoped>
.history-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.history-button-fill {
    width: 50%;
    height: 60px;
}

.history-button-outline {
    width: 50%;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    height: 60px;
    color: #000;
}

.history-label {
    font-size: 1.5rem;
    margin-bottom: 20px;
    position: relative;
    top: -20px;
}
</style>