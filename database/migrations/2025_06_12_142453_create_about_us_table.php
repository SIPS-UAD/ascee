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
        Schema::create('about_us', function (Blueprint $table) {
            $table->id('id_about');
            $table->text('description');
            $table->text('visi_misi');
            $table->string('section');
            $table->text('people')->nullable();
            $table->text('contact')->nullable();
            $table->unsignedBigInteger('admin_id');
            $table->timestamps();

            $table->foreign('admin_id')
                ->references('id_admin')
                ->on('admins')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('about_us');
    }
};
