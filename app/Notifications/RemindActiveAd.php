<?php

namespace App\Notifications;

use App\Models\ActiveAd;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class RemindActiveAd extends Notification
{
    use Queueable;
    private $activeAd;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(ActiveAd $activeAd)
    {
        $this->activeAd = $activeAd;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('MediaService - активная реклама')
            ->line('Заканчивается рекламная кампания, у клиента - ' . $this->activeAd->claim->client->name)
            ->line("Дата окончания: " . Carbon::parse($this->activeAd->end_date)->format('d.m.Y'))
            ->line("Услуга: " . $this->activeAd->claim->service->name)
            ->action('Перейти в активную рекламу', 'https://crm-mediaservice.ru/active-ad');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
