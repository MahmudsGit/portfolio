@extends('admin.layout')
@section('content')
<!-- Main Content -->
<div class="main-content">
<section class="section">
    <div class="section-header">
    <h1>Profile</h1>
    <div class="section-header-breadcrumb">
        <div class="breadcrumb-item active"><a href="{{ url('/dashboard') }}">Dashboard</a></div>
        <div class="breadcrumb-item">Profile</div>
    </div>
    </div>
    <div class="section-body">
    <h2 class="section-title">Hi, {{ Auth::user()->name }}</h2>
    <p class="section-lead">
        Change information about yourself on this page.
    </p>

    <div class="row mt-sm-4">
        <div class="col-12 col-md-12 col-lg-6">
            <div class="card">
                <form method="post" action="{{ route('password.update') }}" class="needs-validation" novalidate="">
                    @csrf
                    @method('put')
                <div class="card-body">
                    <div class="mb-4">
                        <h6 class="text-md text-gray-600 card-subtitle mb-2">Update Password</h6>
                        <p class="text-sm text-gray-400 card-subtitle">Ensure your account is using a long, random password to stay secure.</p>
                    </div>
                    <div class="row">                               
                        <div class="form-group col-md-12 col-12">
                            <label for="current_password" >Current Password</label>
                            <input type="password" class="form-control" id="current_password" name="current_password" autocomplete="current-password" >
                            <span class="text-danger text-small">
                            {{ $errors->updatePassword->first('current_password') }}
                            </span>
                        </div>
                    </div>
                    <div class="row">                               
                        <div class="form-group col-md-12 col-12">
                            <label>Current Password</label>
                            <input for="update_password_password" type="password" class="form-control" id="update_password_password" name="password" autocomplete="new-password" >
                            <span class="text-danger text-small">
                                {{ $errors->updatePassword->first('password') }}
                            </span>
                        </div>
                    </div>
                    <div class="row">                               
                        <div class="form-group col-md-12 col-12">
                            <label for="update_password_password_confirmation" >Current Password</label>
                            <input type="password" class="form-control" id="update_password_password_confirmation" name="password_confirmation" autocomplete="new-password" >
                            <span class="text-danger text-small">
                            {{ $errors->updatePassword->first('password_confirmation') }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-right">
                    <button class="btn btn-primary">Save Changes</button>
                </div>
                </form>
            </div>
        </div>
        <div class="col-12 col-md-12 col-lg-6">
            <div class="card">
                <form method="post" action="{{ route('profile.update') }}" class="needs-validation" novalidate="">
                    @csrf
                    @method('patch')
                <div class="card-body">
                    <div class="mb-4">
                        <h6 class="text-md text-gray-600 card-subtitle mb-2">Edit Profile Information</h6>
                        <p class="text-sm text-gray-400 card-subtitle">Update your account's profile information and email address.</p>
                    </div>
                    <div class="row">                               
                        <div class="form-group col-md-6 col-12">
                        <label>Name</label>
                        <input type="text" class="form-control" id="name" name="name" value="{{ $user->name }}" >
                        @if ($errors->get('name'))
                        <span class="text-danger text-small">
                        {{ $errors->get('name') }}
                        </span>
                        @endif
                        </div>
                        <div class="form-group col-md-6 col-12">
                        <label>Email</label>
                        <input type="email" class="form-control" id="email" name="email" value="{{ $user->email }}" >
                        @if ($errors->get('email'))
                        <span class="text-danger text-small">
                        {{ $errors->get('email') }}
                        </span>
                        @endif
                    </div>
                </div>
                <div class="card-footer text-right">
                    <button class="btn btn-primary">Update Changes</button>
                </div>
                </form>
            </div>
        </div>
    </div>
    </div>
</section>
</div>

@endsection()



{{-- <x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Profile') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                <div class="max-w-xl">
                    @include('profile.partials.update-profile-information-form')
                </div>
            </div>

            <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                <div class="max-w-xl">
                    @include('profile.partials.update-password-form')
                </div>
            </div>

            <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                <div class="max-w-xl">
                    @include('profile.partials.delete-user-form')
                </div>
            </div>
        </div>
    </div>
</x-app-layout> --}}
