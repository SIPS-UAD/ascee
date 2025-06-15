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
        Schema::create('pencarian_members', function (Blueprint $table) {
            $table->id('id_member');
            $table->string('id_address');
            $table->string('name');
            $table->date('date_join');
            $table->string('membership_type');
            $table->string('full_name');
            $table->string('gender');
            $table->string('phone');
            $table->date('birth_date');
            $table->unsignedBigInteger('user_id');
            $table->timestamps();

            $table->foreign('user_id')
                ->references('id_user')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pencarian_members');
    }
};
