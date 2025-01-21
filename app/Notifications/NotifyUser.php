<?php

namespace App\Notifications;

use App\Models\Claim;
use App\Models\Client;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NotifyUser extends Notification
{
    use Queueable;

    private $message, $client, $link, $claim;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($message, $link, Client $client = null, Claim $claim = null)
    {
        $this->message = $message;
        $this->client = $client;
        $this->link = $link;
        $this->claim = $claim;
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
        $mail = new MailMessage();
        $mail->subject('MediaService - уведомление');
        $mail->line($this->message);

        if ($this->client != null) {
            $mail->line('Клиент - ' . $this->client->name);
        }

        if ($this->claim != null) {
            $mail->line('Заявка №' . $this->claim->id);
            $mail->line("Услуга - " . Carbon::parse($this->claim->service->name));
        }

        $mail->action('Посмотреть', $this->link);

        return $mail;
//        return (new MailMessage)
//            ->subject('MediaService - уведомление')
//            ->line('Заканчивается рекламная кампания, у клиента - ' . $this->activeAd->claim->client->name)
//            ->line("Дата окончания: " . Carbon::parse($this->activeAd->end_date)->format('d.m.Y'))
//            ->action('Перейти в активную рекламу', 'https://crm-mediaservice.ru/active-ad');
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
