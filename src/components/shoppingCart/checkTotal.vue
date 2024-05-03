<template>
    <div>
        <div class="subtotal">
            <ion-label>sub total</ion-label>
            <ion-label>$20</ion-label>
        </div>
        <div class="subtotal" style="border-bottom: 1px solid #E7E5E4;">
            <ion-label>tax(15%):</ion-label>
            <ion-label>$3</ion-label>
        </div>
        <div class="subtotal-bold">
            <ion-label class="total">total:</ion-label>
            <ion-label>$23</ion-label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon } from '@ionic/vue';
import { paperPlane, paperPlaneSharp } from 'ionicons/icons';
</script>

<style lang="scss" scoped>
.subtotal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #A8A29E;
    font-size: 1rem;
    width: 100%;
    padding: 0.5rem 0;
}

.subtotal-bold {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
    font-size: 1.3rem;
    width: 100%;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

.total {
    color: #000;
    font-size: 1rem;
    width: 100%;
    font-weight: 400 !important;
}
</style>