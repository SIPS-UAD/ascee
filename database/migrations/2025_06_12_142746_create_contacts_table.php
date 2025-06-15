<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contacts', function (Blueprint $table) {
            $table->id('id_contact');
            $table->string('address_line');
            $table->string('website_url')->nullable();
            $table->string('zip');
            $table->string('province');
            $table->string('country');
            $table->unsignedBigInteger('pencarian_member_id')->nullable();
            $table->unsignedBigInteger('jenis_mitra_id')->nullable();
            $table->timestamps();

            $table->foreign('pencarian_member_id')
                ->references('id_member')
                ->on('pencarian_members')
                ->onDelete('cascade');

            $table->foreign('jenis_mitra_id')
                ->references('id_mitra')
                ->on('jenis_mitras')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacts');
    }
};
